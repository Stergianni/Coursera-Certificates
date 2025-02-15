#!/bin/bash

echo "Enter the principal amount:"
read principal

echo "Enter the annual interest rate (in percentage):"
read rate

echo "Enter the number of years:"
read years

# Calculate simple interest
interest=$(echo "$principal * $rate * $years / 100" | bc -l)
echo "The simple interest is: $interest"
