FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port (same as app.js)
EXPOSE 5490

# Run app
CMD ["node", "app.js"]
