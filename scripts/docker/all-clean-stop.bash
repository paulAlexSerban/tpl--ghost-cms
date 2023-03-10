#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  STOP ALL 🐳  Docker and clean containers"
docker compose --env-file ../../config.env \
  --file ../../docker/docker-compose.ghost_cms.yml \
  down --volumes --rmi all
docker container prune -f
docker volume prune -f
docker image prune -af
rm -rfv ../../backend/ghost_cms/dist/*
