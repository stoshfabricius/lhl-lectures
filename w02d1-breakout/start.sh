# W01D2 Breakout - Start Script

echo 'Starting container for W02D1 Breakout Code Examples'

# Move into code directory
cd code

# Build the examples container
docker build . -t lhl-lectures/w02d1-breakout:latest

echo 'Container built successfully!'

# Run the container and mount the code repo into the container and jump into container
docker run --rm -it -v `pwd`:/usr/src/app lhl-lectures/w02d1-breakout:latest
