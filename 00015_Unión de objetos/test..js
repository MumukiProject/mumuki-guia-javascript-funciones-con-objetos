describe("", function() {
  it("Si hacemos merge({ a: 1, b: 2, c: 3 }, { d: 4, b: 5 })", function() {
   let info1 = { a: 1, b: 2, c: 3 };
   let info2 = { d: 4, b: 5 };
   let resultado = merge(info1, info2)
    assert.equal(resultado, {a: 1, b: 2, c: 3, d: 4});
  })
});

describe("", function() {
  it("Si hacemos merge({ a: 4, b: 8, c: 5 }, { h: 4, b: 5 })", function() {
   let info1 = { a: 4, b: 8, c: 5 };
   let info2 = { h: 4, b: 5 };
   let resultado = merge(info1, info2)
    assert.equal(resultado, {a: 4, b: 8, c: 5, h: 4});
  })
});