FROM node:18-slim AS build

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:mainline AS production

COPY --from=build /app/dist/time-tree-ui /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
