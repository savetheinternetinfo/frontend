FROM nginx

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs

COPY . code
WORKDIR code

RUN npm run build
RUN rm /var/www/html/* -R
RUN mv ./build /var/www/html
RUN rm ./* -R