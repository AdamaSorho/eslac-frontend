# Build stage
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/eslac-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Copy SSL from certbot 
COPY ./ssl /etc/letsencrypt

# Copy SSL certificates (you'll need to have these files available)
COPY ./ssl/fullchain.pem /etc/nginx/ssl/
COPY ./ssl/privkey.pem /etc/nginx/ssl/

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]