describe("", function() {
  it("Si hacemos filtrarPropiedades({ a: 1, b: 2, c: 3 }, ['c', 'b']), nos retorna {b: 2, c: 3}", function() {
   let data = { a: 1, b: 2, c: 3 };
    let props = ["c", "b"];
   let resultado = filtrarPropiedades(data, propiedades)
    assert.equal(resultado, {b: 2, c: 3});
  })
});
