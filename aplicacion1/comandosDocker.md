# Comandos Docker

## docker ps

Este comando listaba los contenedores que estan **corriendo**.
```
>> docker ps
```

## docker ps -a

Este comando listaba **TODOS** los contenedores que estan **instalados**.
```
>> docker ps -a
```

## docker stop 'id' o 'nombre'

Este comando **detiene** los o el  contenedor que este **corriendo**.
```
>> docker stop 12mMC232udD micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```


## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name kevin -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=kevin -e MYSQL_USER=kevin -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
### --name adrian 
El nombre del contenedor

### -e MYSQL_ROOT_PASSWORD=
-e le dice al docker que es una nueva variable de entorno

### -e MYSQL_DATABASE=
-e le dice al docker que e una variable de entorno
El nombre de la ****

### -e MYSQL_USER=
-e le dice al docker que e una nueva variable de entorno

### -e MYSQL_USER=
-e le dice al docker que e una nueva variable de entorno






