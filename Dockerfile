FROM node:17

COPY dist ./dist
COPY node_modules ./node_modules

ENV NODE_ENV="production"

EXPOSE 8080

CMD node server.js