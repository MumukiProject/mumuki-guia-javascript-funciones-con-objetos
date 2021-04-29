- Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque - defensaEnemigo` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
- (Pista) deberia clonar ambos objetos
- (Pista) deberia crear un objeto para guardar las rondas y la ganadora(un acumulador)
- (Pista) deberia usar un bucle while con una condicion que pregunte si fighterA es mayor a cero y si fighterB es mayor a cero
- (Pista) deberia sumar un round
- (Pista) deberia calcular el daño del fighterA
- (Pista) deberia resta el daño del fighterA  al fighterB
- (Pista) deberia comprobar que la vida del fighterB llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
- (Pista) deberia calcular el daño del fighterB
- (Pista) deberia resta el daño del fighterB  al fighterA
- (Pista) deberia comprobar que la vida del fighterA llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
- (Pista) deberia retonar el objeto
```javascript
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 };
fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}
```