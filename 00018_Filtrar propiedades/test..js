describe("", function() {
  it("Si hacemos filtrarPropiedades({ a: 1, b: 2, c: 3 }, ['c', 'b']), nos retorna {b: 2, c: 3}", function() {
   let data = { a: 1, b: 2, c: 3 };
   let props = ["c", "b"];
   let resultado = filtrarPropiedades(data, props)
    assert.equal(resultado, {b: 2, c: 3});
  })
});

describe("", function() {
   let data = { a: 11, b: 4, h: 8 };
   let props = ["h"];
   let resultado = filtrarPropiedades(data, props)
    assert.equal(resultado, {h: 8});
  })
});