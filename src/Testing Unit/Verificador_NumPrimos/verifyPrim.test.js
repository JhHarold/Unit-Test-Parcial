const esPrimo = require('./verifyPrim');

describe('Funcion esPrimo', () => {
  test('Debe retornar false para el numero 1', () => {
    const result = esPrimo(1)
    expect(result).toBe(false);
  });

  test('Debe retornar true para 2', () => {
    const result = esPrimo(2)
    expect(result).toBe(true);

  });

  test('Retornar true para un numero primo', () => {
    const result = esPrimo(5)
    expect(result).toBe(true); 
  });

  test('Debe retornar false para un numero que no es primo', () => {
    const result = esPrimo(4)
    expect(result).toBe(false);

  });

  test('Retornar false para numeros negativos', () => {
    const result = esPrimo(-10)
    expect(result).toBe(false);
  });
});
