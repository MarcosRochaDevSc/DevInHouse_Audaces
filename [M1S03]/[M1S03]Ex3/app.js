const concatena = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  
  const novoArray = concatena([1, 2, 3], [4, 5, 6]);//teste
  console.log(novoArray);