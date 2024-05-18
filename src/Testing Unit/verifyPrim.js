function esPrimo(num) {

    if (num <= 1) {
      return false;
    } else if (num <= 3) {
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    const cuadRoot = Math.sqrt(num);
    for (let i = 5; i <= cuadRoot; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  

  const num = 5;
  const isPrime = esPrimo(num); 
  
  if (isPrime) {
    console.log(`${num} es numero primo`);
  } else {
    console.log(`${num} no es un numero primo`);
  }
  