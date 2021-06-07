describe("", function() {
  const valentina = {
  nombre: 'Valentina',
  apellido: 'Tereshkova',
  email: 'Valentina.Tereshkova@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Valentina Tereshkova, nos va a retornar Valentina Tereshkova", function() {
    let resultado = obtenerNombreCompleto(valentina);
    assert.equal(resultado,'Valentina Tereshkova');
  })
})
