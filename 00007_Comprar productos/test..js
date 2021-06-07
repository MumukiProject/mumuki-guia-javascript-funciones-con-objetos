describe("", function() {
  const productos = { mouse: 500, teclado: 1000, monitor: 3000 };
  it("Si hacemos comprarProductos(1500, 'mouse: 500, teclado: 1000, monitor: 3000', nos retorna 'mouse: true, teclado: true, monitor: false'", function() {
    let resultado = comprarProductos(1500, productos);
    assert.equal(resultado, "mouse: true, teclado: true, monitor: false");
  })
});
