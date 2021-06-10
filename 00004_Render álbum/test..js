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
    let esperado = "\n <div class=\"card m-5\" id=\"nirv1234\">\n <img class=\"card-img-top\" src=\"https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg\" alt=\"Nirvana - With The Lights Out\" />\n <div class=\"card-body\">\n <h5 class=\"card-title\">Nirvana</h5>\n <p class=\"card-text\">With The Lights Out (2004) | Grunge</p>\n <a href=\"https://en.wikipedia.org/wiki/With_the_Lights_Out\" class=\"btn btn-primary\">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>\n </div>\n </div>\n";
    let resultado = render(albumNirvana);
    assert.equal(resultado, esperado);
  })
});
