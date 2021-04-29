- Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino
- (Pista) deberia recorrer todo el objeto que nos pasan por parametro
- (Pista) deberia usar un acumulador o clonar products,que guarde true o false segun corresponda
- (Pista) deberia validar y guardar que el producto sea menor a dinero ingresado

```javascript
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 115;
buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}
```
