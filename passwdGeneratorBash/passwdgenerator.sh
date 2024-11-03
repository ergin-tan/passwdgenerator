#!/bin/bash

generate_passwd()
{
  local length=$1
  local include_upper=$2
  local include_numbers=$3
  local include_special=$4

  local charset="abcdefghijklmnopqrstuvwxyz"
  if [[ $include_upper == "y" ]]; then
    charset="${charset}ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fi
  if [[ $include_numbers == "y" ]]; then
    charset="${charset}0123456789"
  fi
  if [[ $include_special == "y" ]]; then
    charset="${charset}!@#$%^&*()-_=+[]{}|;:,.<>?"
  fi

  local passwd=""
  for (( i=0; i<length; i++ )); do
    passwd="${passwd}${charset:RANDOM%${#charset}:1}"
  done

  echo "Generated Password: $passwd"
}

read -p "Password Length: " length
read -p "Should capital letters be included? (y/n): " include_upper
read -p "Should numbers be included? (y/n): " include_numbers
read -p "Should special characters be included? (y/n): " include_special

generate_passwd "$length" "$include_upper" "$include_numbers" "$include_special"
