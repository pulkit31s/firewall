#!/bin/bash

IP_LIST_FILE="blocked_ips.txt"

# Function to add an IP to the blocked list file
add_ip_to_blocklist() {
  local ip_to_add="$1"

  # Basic IP address validation
  if ! [[ "$ip_to_add" =~ ^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ ]]; then
    echo "Error: '$ip_to_add' is not a valid IPv4 address."
    return 1
  fi

  # Check if the IP is already in the file (to avoid duplicates)
  if grep -q "^${ip_to_add}$" "$IP_LIST_FILE"; then
    echo "IP address '$ip_to_add' is already in the blocklist."
    return 0
  fi

  # Append the IP to the file
  echo "$ip_to_add" >> "$IP_LIST_FILE"
  if [ $? -eq 0 ]; then
    echo "IP address '$ip_to_add' added to blocklist '$IP_LIST_FILE'."
    return 0
  else
    echo "Error: Failed to add IP address '$ip_to_add' to blocklist."
    return 1
  fi
}

# --- Main Script ---

if [ $# -eq 0 ]; then
  echo "Usage: $0 <ip_address_to_block> [<ip_address_to_block2> ...]"
  echo "       This script adds IP addresses to the '$IP_LIST_FILE' file."
  echo "       You then need to run the 'realtime_blocker.sh' script separately"
  echo "       to actually block these IPs using iptables."
  exit 1
fi

# Ensure the blocklist file exists (create it if it doesn't)
touch "$IP_LIST_FILE"

# Process each IP address provided as a command-line argument
for ip_arg in "$@"; do
  add_ip_to_blocklist "$ip_arg"
done

echo "Finished processing IP address additions."
exit 0