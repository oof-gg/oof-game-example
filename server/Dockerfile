FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose the ports the server runs on
EXPOSE 9090

# Set environment variables
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]