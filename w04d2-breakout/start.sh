# W04D2 Breakout - Start Script

echo 'Starting environment for W04D2 Breakout Code Examples'

# Move into code directory
cd code

# Build the examples container
docker-compose build

echo 'Container built successfully!'

# Start the compose containers and connect to the node app

docker-compose run --rm app
