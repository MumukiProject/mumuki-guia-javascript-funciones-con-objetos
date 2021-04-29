- Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

```javascript
const info1 = { a: 1, b: 2, c: 3 };
const info2 = { d: 4, b: 5 };
merge(info1, info2); // returns {a: 1, b: 2, c: 3, d: 4}
```