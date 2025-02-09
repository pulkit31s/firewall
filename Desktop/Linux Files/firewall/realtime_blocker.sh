#!/bin/bash

# Script to continuously monitor a list of IP addresses and block/unblock them using iptables in real-time.

# --- Configuration ---
IP_LIST_FILE="blocked_ips.txt"  # File containing IP addresses to block
SLEEP_INTERVAL=10              # Interval (in seconds) to check for changes
IPTABLES_CHAIN="INPUT"         # iptables chain to use
IPTABLES_ACTION="DROP"          # iptables action to take

# --- Functions ---

block_ip() {
  local ip="$1"
  if ! sudo iptables -C "$IPTABLES_CHAIN" -s "$ip" -j "$IPTABLES_ACTION" > /dev/null 2>&1; then
    echo "Blocking IP: $ip"
    sudo iptables -A "$IPTABLES_CHAIN" -s "$ip" -j "$IPTABLES_ACTION"
  else
    echo "IP: $ip is already blocked."
  fi
}

unblock_ip() {
  local ip="$1"
  if sudo iptables -C "$IPTABLES_CHAIN" -s "$ip" -j "$IPTABLES_ACTION" > /dev/null 2>&1; then
    echo "Unblocking IP: $ip"
    sudo iptables -D "$IPTABLES_CHAIN" -s "$ip" -j "$IPTABLES_ACTION"
  else
    echo "IP: $ip is not currently blocked."
  fi
}

get_blocked_ips_from_file() {
  local ip_array=()
  while IFS= read -r line; do
    line=$(echo "$line" | tr -d '[:space:]') # Trim whitespace
    if [[ -n "$line" ]] && [[ "$line" != "#"* ]]; then # Ignore empty lines and comments
      ip_array+=("$line")
    fi
  done < "$IP_LIST_FILE"
  echo "${ip_array[@]}"
}

get_currently_blocked_ips() {
  local blocked_ips_iptables=()
  while IFS= read -r line; do
    if [[ "$line" =~ "$IPTABLES_ACTION.*s ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)" ]]; then
      blocked_ips_iptables+=("${BASH_REMATCH[1]}")
    fi
  done < <(sudo iptables -L "$IPTABLES_CHAIN" -n)
  echo "${blocked_ips_iptables[@]}"
}


# --- Main Loop ---

echo "Starting real-time IP blocking script..."

while true; do
  echo "--- Checking for IP list updates at $(date) ---"

  # 1. Get IPs from the blocked IPs file
  declare -a desired_blocked_ips
  read -r -a desired_blocked_ips <<< "$(get_blocked_ips_from_file)"

  # 2. Get currently blocked IPs from iptables
  declare -a current_blocked_ips
  read -r -a current_blocked_ips <<< "$(get_currently_blocked_ips)"

  # --- Block new IPs from the file ---
  for ip_to_block in "${desired_blocked_ips[@]}"; do
    is_currently_blocked=false
    for currently_blocked_ip in "${current_blocked_ips[@]}"; do
      if [[ "$ip_to_block" == "$currently_blocked_ip" ]]; then
        is_currently_blocked=true
        break
      fi
    done
    if ! "$is_currently_blocked"; then
      block_ip "$ip_to_block"
    fi
  endfor

  # --- Unblock IPs that are no longer in the file ---
  for currently_blocked_ip in "${current_blocked_ips[@]}"; do
    is_in_file=false
    for ip_in_file in "${desired_blocked_ips[@]}"; do
      if [[ "$currently_blocked_ip" == "$ip_in_file" ]]; then
        is_in_file=true
        break
      fi
    done
    if ! "$is_in_file"; then
      unblock_ip "$currently_blocked_ip"
    fi
  endfor

  echo "Sleeping for $SLEEP_INTERVAL seconds..."
  sleep "$SLEEP_INTERVAL"
done

echo "Script finished (this should not be reached in a continuous loop)."
exit 0