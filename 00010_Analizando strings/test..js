describe("", function() {
  it("Si hacemos obtenerInfoString('H3ll0 Wor1d') retorna {letras:  7, digitos: 3, espacios: 1}", function() {
    let resultado = obtenerInfoString('H3ll0 Wor1d');
    assert.equal(resultado, {letras:  7, digitos: 3, espacios: 1});
  })
});

describe("", function() {
  it("Si hacemos obtenerInfoString('H0L4 4D4, B13NV3N1D4') retorna {letras:  8, digitos: 10, espacios: 2}", function() {
    let resultado = obtenerInfoString('H0L4 4D4, B13NV3N1D4');
    assert.equal(resultado, {letras:  8, digitos: 10, espacios: 2});
  })
});

