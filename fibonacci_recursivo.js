// Función recursiva para calcular Fibonacci
// 1,1,2,3,5,8,13,21,34
// 0,1,2,3,4,5, 6, 7, 8

function fib(n) {
  let r = 0;

  // Caso inductivo
  if (n > 1) {
    r = fib(n - 1) + fib(n - 2);
  }

  // Caso base
  if (n <= 1) {
    r = 1;
  }

  return r;
}

// Función principal (main)
function main() {
  // Ejemplo: calcular Fib(6)
  let f = fib(7);
  console.log("Fib(7):", f); // Debe imprimir 13
}

// Llamada a main
main();
