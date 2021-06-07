Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`.

```javascript
ム parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate");
{ keyword: "objects", language: "javascript", level: "intermediate" }
```

> Definí la función `parseQueryParams` que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.