# 1. The Base Image: A hyper-lightweight version of Linux with Node.js pre-installed
FROM node:24-alpine

# 2. Set the secure working directory inside the container
WORKDIR /app

# 3. Copy only the dependency blueprints first (for caching efficiency)
COPY package*.json ./

# 4. Install dependencies inside the container's isolated environment
RUN npm install

# 5. Copy all remaining backend files into the container
COPY . .

# 6. Punch a hole in the container's armor so the WebSockets can transmit
EXPOSE 5050

# 7. The ignition command: How the container wakes up
CMD ["node", "server.js"]