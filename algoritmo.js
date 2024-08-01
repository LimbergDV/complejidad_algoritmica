//algoritmo o(n^2)
function primerRepetidoCuadratico(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return arr[i];
        }
      }
    }
    return null;
  }


  function primerRepetidoOrdenado(arr) {
     // Ordenar array 
    const arrSorted = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < arrSorted.length - 1; i++) {
      if (arrSorted[i] === arrSorted[i + 1]) {
        return arrSorted[i];
      }
    }
    return null;
  }

  
  function primerRepetidoLineal(arr) {
    const primerAparicion = {};
    let primerRepetido = null;
    let posicionRepetido = arr.length; // Inicializamos con un valor fuera del rango del array
  
    for (let i = 0; i < arr.length; i++) {
      const elemento = arr[i];
  
      if (primerAparicion[elemento] !== undefined) {
        // Si ya hemos visto el elemento, verificar si es el primer repetido en términos de posición
        if (primerAparicion[elemento] < posicionRepetido) {
          primerRepetido = elemento;
          posicionRepetido = primerAparicion[elemento];
        }
      } else {
        // Registrar la primera aparición del elemento
        primerAparicion[elemento] = i;
      }
    }
  
    return primerRepetido;
  }
  
  
  //const arrayEjemplo = [3, 2, 1, 2, 2, 3];
  //const arrayEjemplo = [5, 4, 3, 4, 4, 5];
    const arrayEjemplo = [2, 5, 3, 5, 5, 2];


console.log(primerRepetidoCuadratico(arrayEjemplo)); // Salida: 3
console.log(primerRepetidoOrdenado(arrayEjemplo));   // Salida: 2 (resultado puede variar)
console.log(primerRepetidoLineal(arrayEjemplo));     // Salida: 3

  