const highCapter = require('./textChain');

describe('Funcion highCapter', () => {
  test('Retornar "Hola Mundo" al convertir "hola mundo"', () => {
    const result = highCapter("hola mundo");
    expect(result).toBe("Hola Mundo");
  });

  test('Debe retornar una cadena vacia cuando el input tambien es una cadena vacía', () => {
    const result = highCapter("");
    expect(result).toBe("");
  });

  test('No debe cambiar la cadena que esta en titulo', () => {
    const result = highCapter("Hola Mundo");
    expect(result).toBe("Hola Mundo");
  });
});
