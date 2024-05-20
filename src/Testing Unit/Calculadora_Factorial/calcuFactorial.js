function factoriales(num) {
  if (num < 0) {
    return NaN;
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
module.exports = factoriales;
