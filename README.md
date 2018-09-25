# Markdown Links

Esta librería permite analizar archivos con extensión Markdown (.md) y extraer todos los links que esten presentes, así como también mostrar la ruta, el texto de la URL y validar el status de cada una. Todo esto se muestra por medio de la consola, y si el archivo no contiene links, no retorna nada.

# Instalación
### Requisitos para ejecutar nuestra librería
Debes instalar las siguientes librerías con las que se ejecuta correctamente Markdown, de forma global (-g) o de manera local en tu proyecto (--save-dev):

```js
  $npm install -g
  $npm install marked -g
  $npm install node-fetch -g
```

### Instalación de la librería

```js
  $npm install mdlinks-crp -g
 ```

### Y luego ejecutar el siguiente comando

```js
  $md-links
 ```
 Esto retornará un listado de links existentes en el archivo markdown. Si deseas verificar el status de cada link, debes ejecutar el comando:

```js
  $md-links --validate
 ```
# Enlace a NPM

  [Click aquí](https://www.npmjs.com/package/mdlinks-crp)
 
# Versión
0.0.3

# Autor
Camila Constanza Ramírez Ponce - Estudiante Laboratoria, Bootcamp 2018

