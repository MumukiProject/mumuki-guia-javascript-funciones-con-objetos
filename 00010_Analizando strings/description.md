- Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
- (Pista) deberia recorrer el string letra por letra
- (Pista) deberia crear un objeto que guarde LETTERS,DIGITS,SPACES
- (Pista) deberia convertilo a formato number y si retorna no retorna un NaN lo guardo en digits
- (Pista) en caso contrario revisar si es un espacio,si es asi guardarlo en spaces
- (Pista) sino guardarlo en letters

```javascript
getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
```