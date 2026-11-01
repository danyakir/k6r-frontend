# build
FROM registry.example.com/ubi9/nodejs-20:latest as builder

USER root

WORKDIR /app 

COPY package*.json .

RUN npm ci

COPY . . 

RUN npm run build

# serve

FROM registry.example.com/k6r/nginx:1.25.3

USER root

COPY --from=builder /app/dist /usr/share/nginx/html

RUN chmod +x /usr/share/nginx/html/vite-envs.sh

RUN chmod g+w -R /usr/share/nginx/html

ENTRYPOINT sh -c "./usr/share/nginx/html/vite-envs.sh && nginx -g 'daemon off;'"
