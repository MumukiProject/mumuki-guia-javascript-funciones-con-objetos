describe("", function() {
  let resultado =  obtenerInfoDelParrafo("Do. Or do not. There is no try.");
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de letras es 21", function() {
    assert.equal(resultado.letras, 21);
  })
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de letras es 21", function() {
    assert.equal(resultado.palabras, 8);
  })
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de oraciones es 3", function() {
    assert.equal(resultado.oraciones, 3);
  })
});
