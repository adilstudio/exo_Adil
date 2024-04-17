FROM node:18-alpine as application

WORKDIR /app

COPY package*.json ./

RUN npm install next typescript react react-dom nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
