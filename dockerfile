# Build
FROM node:10.23.1-alpine3.9 AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY /src ./src
RUN npm install
RUN npm run build
# RUN npm prune --production

# Compile Typescript
FROM node:10.23.1-alpine3.9
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=BUILD_IMAGE /app/build ./
ENV NODE_ENV=production
ENV MONGO_URI=mongodb://mongo:27017/plans
EXPOSE 5000
CMD ["node", "index.js"]