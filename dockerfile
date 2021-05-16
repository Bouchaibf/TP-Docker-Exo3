FROM  node

COPY server /server

WORKDIR /server

RUN npm i

EXPOSE 8080

CMD ["node", "server.js"]



