FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose the port the server runs on
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]