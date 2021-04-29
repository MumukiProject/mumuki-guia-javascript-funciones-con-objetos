- Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, `true` si puede comprarlos a todos o `false` si no
- (Pista) deberia recorrer todo el objeto que nos pasan por parametro
- (Pista) deberia sumar el precio de todos los items
- (Pista) deberia validar el total es menor a dinero ingresado

```javascript
const products = { cookies: 60, chocolate: 110, soda: 120 };
const money = 300;
canBuyAllProduct(money, products); // returns true
```
