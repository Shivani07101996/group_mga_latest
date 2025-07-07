# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of your app
COPY . .

# Build the app
RUN npm run build

# Expose the app on port 9002
EXPOSE 9002

# Start the app
CMD ["npm", "start", "--", "-p", "9002"]
