Tenemos los datos de distintas personas que quieren crear un user dentro de GMail, todos los datos se guardan como objetos con las propiedades que mostramos posteriormente.
Nos pidieron implementar una función, llamada `validarPassword`, que recibe estos objetos y valide la contraseña

- la función nos tiene que retornar un objeto con dos propiedades: `verificada` (un booleano) y `mensaje` (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien);
- de la contraseña tenemos que validar:
  - que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres");
  - que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura")

```js
const user1 = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  password: '123456'
};

const user2 = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  password: '**178!Ada--'
};

const user3 = {
  nombre: 'Hedy',
  apellido: 'Lamarr',
  email: 'hlamarr@gmail.com',
  password: '1234'
};

ムvalidarPassword(user1);
verificada: false, mensaje: 'Contraseña muy insegura'
ムvalidarPassword(user2);
verificada: true, mensaje: ''
ムvalidarPassword(user3);
verificada: false, mensaje: 'Contraseña con menos de 6 caracteres'
```

> Definí la función `validarPassword` y las funciones auxiliares necesarias para lograr el comportamiento que acabamos de describir.