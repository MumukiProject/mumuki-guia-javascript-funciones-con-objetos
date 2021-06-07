describe("", function() {
  it("Si una persona cumple con todos los requisitos de una búsqueda, se adecua a la misma", function() {
   let persona = {
        experiencia: 4,
        lenguajes: ["JavaScript", "HTML","CSS"],
        locacion: ["Buenos Aires"],
        remuneracion: 35000
      }

    let busqueda = {
      experiencia: 1,
      lenguajes: ["JavaScript", "HTML"],
      locacion: ["Buenos Aires"],
      remuneracion: 40000
    }

    assert(seAdecua(persona, busqueda));
  })
});

describe("", function() {
  it("Si una persona no cuenta con los años de experiencia necesarios de una búsqueda, no se adecua", function() {
   let persona = {
        experiencia: 1,
        lenguajes: ["JavaScript", "HTML","CSS"],
        locacion: ["Buenos Aires"],
        remuneracion: 35000
      }

    let busqueda = {
      experiencia: 4 ,
      lenguajes: ["JavaScript", "HTML"],
      locacion: ["Buenos Aires"],
      remuneracion: 40000
    }

    assert.not(seAdecua(persona, busqueda));
  })
});