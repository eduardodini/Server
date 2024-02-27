FROM node:20.6.0-bullseye AS base

WORKDIR /app
COPY package*.json /app/
COPY tsconfig.json /app/
RUN npm cache clean --force && npm install -g npm
EXPOSE 4200

FROM base AS dev
ENV NODE_ENV=development
CMD npm run dev