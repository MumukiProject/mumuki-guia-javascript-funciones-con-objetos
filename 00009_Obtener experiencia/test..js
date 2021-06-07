describe("", function() {
  const puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
  const desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };
  it("Si hacemos obtenerExperiencia(puntajes, desafios) retorna 430", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado, 430);
  })
});

describe("", function() {
  const puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
  const desafios = { EASY: 1, MEDIUM: 2, HARD: 5 };
  it("Si hacemos obtenerExperiencia(puntajes, EASY: 1, MEDIUM: 2, HARD: 5) retorna 610", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado, 610);
  })
});

describe("", function() {
  const puntajes = { EASY: 1, MEDIUM: 2, HARD: 3 };
  const desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };
  it("Si hacemos obtenerExperiencia({ EASY: 1, MEDIUM: 2, HARD: 3 }, {EASY: 1, MEDIUM: 2, HARD: 5}) retorna 17", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(17);
  })
});
