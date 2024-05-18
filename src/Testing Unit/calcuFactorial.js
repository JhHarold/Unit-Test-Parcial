function factorial(num) {
    if (num < 0) {
      return NaN;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }

  const numero = -1;
  const calulatedFactor = factorial(numero);
  console.log(`Factorial del numero: ${numero} es: ${calulatedFactor}`);
  