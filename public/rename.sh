#!/bin/bash

# Prompt the user for the prefix to use for the new filenames
echo "Enter a prefix for the new filenames:"
read prefix

# Change to the specified directory
cd "$1" || exit

# Initialize a counter
i=1

# Loop through all the files in the directory
for file in *; do
    if [[ -f $file ]]; then
        # Extract the file extension
        extension="${file##*.}"
        
        # Construct the new filename using the prefix and the counter
        new_filename="$prefix$i.$extension"
        
        # Rename the file
        mv "$file" "$new_filename"
        
        # Increment the counter
        let i++
    fi
done