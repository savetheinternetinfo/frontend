FROM nginx

RUN apt-get update && apt-get install -y curl
RUN apt-get update && apt-get install -y gnupg2
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs

COPY . code
WORKDIR code

RUN npm install
RUN npm run build
RUN rm /usr/share/nginx/html/* -R
RUN mv ./build/* /usr/share/nginx/html/
RUN rm ./* -R