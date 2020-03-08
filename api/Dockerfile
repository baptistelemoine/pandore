FROM node:10

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app/

EXPOSE 9000

CMD ["npm", "start"]
