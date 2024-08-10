FROM node:16
 
WORKDIR /usr/src/app
 
# # Copy root package.json and lockfile
COPY package*.json ./
 
RUN npm install

RUN npm install -g typescript
 
# Copy app source
COPY . .
 
EXPOSE 3002
 
CMD [ "npm", "run", "dev" ]