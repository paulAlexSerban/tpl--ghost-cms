#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🏗️  BUILD Portfolio Website content"
bash 'echo "no build script available"'

echo "🟢  START 🐳  Ghost CMS conatiner "
docker-compose --env-file ../../../config.env \
  --file ../../../docker/docker-compose.ghost_cms.yml \
  up --detach --build