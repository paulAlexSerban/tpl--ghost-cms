#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

npm --prefix ../../../frontend/official-starter-theme run dev