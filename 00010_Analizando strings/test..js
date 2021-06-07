describe("", function() {
  const puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
  const desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };
  it("Si hacemos obtenerExperiencia({ EASY: 10, MEDIUM: 50, HARD: 100 }, { EASY: 3, MEDIUM: 4, HARD: 2 }) retorna 430", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado, 430);
  })
});
