FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm install next typescript react react-dom nodemon
COPY ./db/database.db ./db/database.db
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY ./db/database.db ./db/database.db
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
