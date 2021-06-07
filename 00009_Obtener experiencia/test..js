describe("", function() {
  const productos = { mouse: 500, teclado: 1000, monitor: 3000 };
  it("Si hacemos puedoComprarTodos(4500, 'mouse: 500, teclado: 1000, monitor: 3000', nos retorna true", function() {
    let resultado = puedoComprarTodos(4500, productos);
    assert(resultado);
  })
});
