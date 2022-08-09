#STAGE 1
FROM node:14.18.0
WORKDIR /schools
COPY package.json package-lock.json .
RUN yarn install
RUN yarn install -g @angular/cli@10.2.0

COPY . .
CMD npm run start-docker

#STAGE 2
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /Users/nick/Documents/work/chargeSkills/frames/schools/dist /usr/share/nginx/html