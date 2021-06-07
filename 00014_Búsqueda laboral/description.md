Necesitamos una función que dada una persona y una búsqueda de empleo, devuelva si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

```javascript
persona = {
  experience: 4,
  languages: ["JavaScript", "HTML","CSS"],
  location: ["Buenos Aires"],
  remuneration: 35000
}

busqueda = {
  experience: 1,
  languages: ["JavaScript", "HTML"],
  location: ["Buenos Aires"],
  remuneration: 40000
}

ムseAdecua(persona, busqueda)
true
```

La persona es adecuada si:

- tiene igual o más años de experiencia que la búsqueda;
- los lenguajes que conoce son los que contiene la búsqueda; (puede conocer más, pero no afecta en nada)
- su locación está incluida dentro de las locaciones posibles de la búsqueda;
- su remuneración (pretendida) es igual o menor a la de la búsqueda.

> Definí la función `seAdecua` para lograr el comportamiento que acabamos de describir.