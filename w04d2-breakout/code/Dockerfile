FROM node:latest

# Update Package List
RUN apt update

# Install psql
RUN apt install -y postgresql-client

# Create and move to new working directory

WORKDIR /usr/src/app

# Copy over package.json and install any deps

COPY package*.json ./

RUN npm install

# Copy over rest of source code
COPY . .

# Start a bash prompt
CMD ["bash"]

