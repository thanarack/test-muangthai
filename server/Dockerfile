FROM node:20-alpine3.18
WORKDIR /app
COPY . .
RUN rm yarn.lock
RUN yarn install
# RUN yarn run build
# RUN yarn run generate
EXPOSE 3000/tcp
CMD [ "yarn", "start:app" ]