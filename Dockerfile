# Step 1 – Base image
FROM node:20.18-alpine

# Step 2 – Keep OS packages up to date
RUN apk update && apk upgrade --no-cache

# Step 3 – Set working directory inside container
WORKDIR /usr/src/app

# Step 4 – Copy dependency descriptors
COPY package*.json ./

# Step 5 – Install dependencies for production
RUN npm ci --only=production

# Step 6 – Copy remaining source code
COPY . .

# Step 7 – Expose the port our app listens on
EXPOSE 3000

# Step 8 – Command to launch the app
CMD ["node", "app.js"]
