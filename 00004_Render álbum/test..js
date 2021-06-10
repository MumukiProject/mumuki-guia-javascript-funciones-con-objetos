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
  it("Si tenemos un disco de Nirvana con id = 'nirv1234', al hacer render(albumNirvana), el HTML se renderiza con ese id '", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("id='nirv1234'") || resultado.includes(`id="nirv1234"`))
  });
  it("Si tenemos un disco de Nirvana con portada = 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg', al hacer render(albumNirvana), el HTML se renderiza con ese src '", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("src='https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg'") || resultado.includes(`src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg"`))
  });
  it("Si tenemos un disco de Nirvana con genero = 'Grunge', el HTML se renderiza con ese genero", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("Grunge'") || resultado.includes(`Grunge`));
  })
});
