FROM node:15.13-alpine
WORKDIR /lcoproject
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
CMD ["npm", "run", "develop"]
