function factorial(n) {
  let r = 0;

  if (n < 0) {
    throw new Error("El factorial no está definido para números negativos");
  }

  // Caso inductivo
  if (n > 1) r = n * factorial(n - 1);

  // Caso base
  if (n === 0 || n === 1) r = 1;

  return r;
}

// Función principal (main)
function main() {
  try {
    console.log("Factorial de 4:", factorial(4)); // 24
    console.log("Factorial de 5:", factorial(5)); // 120
    console.log("Factorial de 0:", factorial(0)); // 1

    // Ejemplo con error
    console.log("Factorial de -3:", factorial(-3));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Llamada a la función main
main();
