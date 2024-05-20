const factoriales = require('./calcuFactorial');

describe('Funcion factorial', () => {
  test('Debe retornar 1 como resultado al input de 0', () => {
    const result = factoriales(0);
    expect(result).toBe(1);
  });

  test('Calcular correctamente el factorial de numeros enteros positivos', () => {
    const result = factoriales(5);
    expect(result).toBe(120); 
  });

  test('Debe retornar NaN al tener un input de numeros negativos', () => {
    const result = factoriales(-5);
    expect(result).toBeNaN();
  });
});
