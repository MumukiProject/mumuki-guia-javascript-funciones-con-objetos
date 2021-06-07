describe("", function() {
  it("Si hacemos pelea({ nombre: 'Chun-Li', vida: 100, ataque: 40, defensa: 10 }, { nombre: 'Cammy', vida: 50, ataque: 20, defensa: 20 } retorna { rondas: 3, gano: 'Chun-Li'}", function() {
    let resultado =  pelea(combatienteA, combatienteB)
    assert.equal(resultado, { rondas: 3, gano: "Chun-Li"});
  })
});

describe("", function() {
  it("Si hacemos pelea({ nombre: 'Bellota', vida: 100, ataque: 80, defensa: 5 }, { nombre: 'Mojo Jojo', vida: 60, ataque: 50, defensa: 30 } retorna { rondas: 2, gano: 'Bellota'}", function() {
    let resultado =  pelea(combatienteA, combatienteB)
    assert.equal(resultado, { rondas: 2, gano: "Bellota"});
  })
});
