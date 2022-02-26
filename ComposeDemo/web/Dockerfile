FROM nginx:stable-alpine 

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf 
COPY ./nginx.conf /etc/nginx/nginx.conf 

COPY ./html /usr/share/nginx/html