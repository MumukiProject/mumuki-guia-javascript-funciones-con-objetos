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

describe("", function() {
  const eddie = {
  nombre: 'Eddie',
  apellido: 'Vedder',
  email: 'Eddie.Veder@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Eddie Vedder, nos va a retornar Eddie Vedder", function() {
    let resultado = obtenerNombreCompleto(eddie);
    assert.equal(resultado,'Eddie Vedder');
  })
})

describe("", function() {
  const brenda = {
  nombre: 'Brenda',
  apellido: 'Martin',
  email: 'Brenda.Martin@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Brenda Martin, nos va a retornar Brenda MArtin", function() {
    let resultado = obtenerNombreCompleto(eddie);
    assert.equal(resultado,'Brenda Martin');
  })
})