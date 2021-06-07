describe("", function() {
  it("Si hacemos diferencia({ a: 1, b: 2, c: 3 }, { d: 4, b: 5 })", function() {
   let info1 = { a: 1, b: 2, c: 3 };
   let info2 = { d: 4, b: 5 };
   let resultado = diferencia(info1, info2)
    assert.equal(resultado, {a: 1, c: 3, d: 4});
  })
});

describe("", function() {
  it("Si hacemos diferencia({ a: 4, b: 8, c: 5 }, { h: 4, b: 5 })", function() {
   let info1 = { a: 4, b: 8, c: 5 };
   let info2 = { h: 4, b: 5 };
   let resultado = diferencia(info1, info2)
    assert.equal(resultado, {a: 4, c: 5, h: 4});
  })
});