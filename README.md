# Api-Rest-NodejsMongodb

# Instalación 

Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:
```
npm install -g

# Base de datos

Mongodb

# Endpoints
### GET

Devuelve el listado de todos los users registrados, su nombre y su email:

/users

Devuelve el user registrado indicando su id:

/users/:id

### POST

Crea un nuevo user:

/users

### PUT

Modifica un user, hay que pasar en el body los parámetros "name", "age": y "email":

/users/:id

### DELETE

Elimina un user, hay que pasar el parámetro "id":

/users/:id

