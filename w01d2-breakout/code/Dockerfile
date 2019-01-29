FROM node:latest

# Create and move to new working directory

WORKDIR /usr/src/app

# Copy over package.json and install any deps

COPY package*.json ./

RUN npm install

# Copy over rest of source code
COPY . .

# Start a bash prompt
CMD ["bash"]

