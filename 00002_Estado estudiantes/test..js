describe("", function() {
  const materiasAgus = {
    matematica: [3, 6, 8, 8],
    algoritmos: [10, 7, 9],
    algebra: [4, 5]
  };
  it("Si Agus aprobó todas las materias, al hacer agruparMateriasPorEstado(materiasAgus) muestra aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: []", function() {
    let resultado = agruparMateriasPorEstado(materiasAgus);
    assert.equal(resultado,"aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: []");
  })
});

describe("", function() {
  const materiasJuli = {
    matematica: [3, 2, 2, 3],
    algoritmos: [2, 4, 2],
    algebra: [4, 3]
  };
  it("Si Juli desaprobó todas las materias, al hacer agruparMateriasPorEstado(materiasJuli) muestra aprobadas: [], desaprobadas: ['matematica', 'algoritmos', 'algebra']", function() {
    let resultado = agruparMateriasPorEstado(materiasJuli);
    assert.equal(resultado,"aprobadas: [], desaprobadas: ['matematica', 'algoritmos', 'algebra']");
  })
});

describe("", function() {
  const materiasJuli = {
    matematica: [3, 3, 3, 4],
    algoritmos: [4, 4, 4],
    algebra: [4, 4]
  };
  it("Si Ale desaprobó matematica, al hacer agruparMateriasPorEstado(materiasAle) muestra aprobadas: ['algoritmos', 'algebra'], desaprobadas: ['matematica']", function() {
    let resultado = agruparMateriasPorEstado(materiasJuli);
    assert.equal(resultado,"aprobadas: ['algoritmos', 'algebra'], desaprobadas: ['matematica']");
  })
});