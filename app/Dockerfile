FROM node:10

COPY package.json /
WORKDIR /
RUN npm install
COPY . /

EXPOSE 8000

CMD ["npm", "start"]
