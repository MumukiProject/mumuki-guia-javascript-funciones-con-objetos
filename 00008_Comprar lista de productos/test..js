describe("", function() {
  const productos = { mouse: 500, teclado: 1000, monitor: 3000 };
  it("Si hacemos puedoComprarTodos(4500, 'mouse: 500, teclado: 1000, monitor: 3000', nos retorna true", function() {
    let resultado = puedoComprarTodos(4500, productos);
    assert(resultado);
  })
});

describe("", function() {
  const productos1 = { remera: 1000, zapatillas: 5000, pantalon: 1500 };
  it("Si hacemos puedoComprarTodos(5000, 'remera: 1000, zapatillas: 5000, pantalon: 1500', nos retorna false", function() {
    let resultado = puedoComprarTodos(5000, productos1);
    assert.equal(resultado, false);
  })
});

describe("", function() {
  const productos2 = { fideos: 40, salsa: 45, cebolla: 30 };
  it("Si hacemos puedoComprarTodos(150, 'fideos: 40, salsa: 45, cebolla: 30', nos retorna true", function() {
    let resultado = puedoComprarTodos(40, productos2);
    assert(resultado);
  })
});