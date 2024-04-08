# FROM php:8.2-fpm as builder

# # Argumentos definidos en docker-compose.yml
# ARG user
# ARG uid

# # Instalar dependencias del sistema para extensiones de PHP
# RUN apt-get update && apt-get install -y \
#     libpq-dev \
#     git \
#     curl \
#     libpng-dev \
#     libonig-dev \
#     libxml2-dev \
#     zip \
#     unzip \
#     supervisor \
#     nginx \
#     build-essential \
#     openssl \
#     libzip-dev 

# RUN docker-php-ext-install gd pdo pdo_pgsql pgsql sockets \
#     && pecl install redis \
#     && docker-php-ext-enable redis

# # Obtener el Composer más reciente
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# # Crear un usuario del sistema para ejecutar Composer y comandos de Artisan
# RUN useradd -G www-data,root -u $uid -d /home/$user $user
# RUN mkdir -p /home/$user/.composer && chown -R $user:$user /home/$user

# # Establecer el directorio de trabajo
# WORKDIR /var/www

# # Copiar los archivos de la aplicación
# COPY . .

# # Instalar dependencias de la aplicación
# RUN composer install

# # Cambiar la propiedad de todos los archivos a nuestro usuario
# RUN chown -R $user:$user /var/www

# # Exponer el puerto en el que se ejecutará la aplicación
# EXPOSE 8000


# # Comando para ejecutar al iniciar el contenedor
# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]


# # Segundo stage: Construir la imagen de Nginx
# FROM nginx:1.21-alpine

# # Copiar archivos estáticos de la aplicación PHP a la imagen de Nginx
# COPY --from=builder /var/www/public /usr/share/nginx/html

# # Copiar la configuración personalizada de Nginx
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf