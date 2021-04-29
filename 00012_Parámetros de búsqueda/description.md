Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.
- (Pista) deberia usar un funcion para quedarme con lo que esta despues del `?`,la funcion que se usa con string
- ["http://www.exercises.com","keyword=objects&language=javascript&level=intermediate"]
- (Pista) con el array sobrante,el segundo elemento con indice 1,deberia extraer usar la misma funcion anterior para extraer el `&`
- ["keyword=objects","language=javascript,"level=intermediate"]
- (Pista) deberiamos crear un objeto como acumulador,ej queryParams
- (Pista) deberia recorrer el array que nos quedo,usando la misma funcion de antes sacar el `=`
- aux = ["keyword","objects"]
- (Pista) esto asignarlo al acumulador que creamos antes
- queryParams[aux[0]] = aux[1]



```javascript
parseQueryParams(
  "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
); // returns { keyword: "objects", language: "javascript", level: "intermediate }
```