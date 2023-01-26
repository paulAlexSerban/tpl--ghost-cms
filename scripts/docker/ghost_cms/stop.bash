#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  🐳  STOP Ghost CMS docker container"
docker compose --env-file ../../../config.env \
  --file ../../../docker/docker-compose.ghost_cms.yml \
  down --volumes --rmi all
