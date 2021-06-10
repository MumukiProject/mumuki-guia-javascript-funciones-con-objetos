describe("", function() {
  let albumNirvana= {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};
  it("Si tenemos un disco de Nirvana, al hacer render(albumNirvana), el HTML se renderiza con el disco de Nirvana'", function() {
    let resultado = render(albumNirvana);
    assert.equal(resultado,"<div class='card m-5' id='nirv1234'><img class='card-img-top' src='https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg' alt='Nirvana - With The Lights Out' /><div class='card-body'><h5 class='card-title'>Nirvana</h5><p class='card-text'>With The Lights Out (2004) | Grunge</p><a href='https://en.wikipedia.org/wiki/With_the_Lights_Out' class='btn btn-primary'>https://en.wikipedia.org/wiki/With_the_Lights_Out</a></div></div>");
  })
});
