Para armar el HTML podés utilizar interpolación de strings. Por ejemplo:

```js
const producto = {
  nombre: 'Notebook',
  precio: 123
}

const html = `
  <div class="producto">
    <p>${producto.nombre}</p>
    <small>ARS ${producto.precio}</small>
  </div>
`;
```