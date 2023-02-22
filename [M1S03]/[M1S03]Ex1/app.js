const MinMax = (array) => {
    if (array.length === 0) {
      console.log("Não existem dados para calcular a média");

      return;
    }
    
    let min = array[0];
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    console.log(`Mínimo: ${min}, Máximo: ${max}`);
  }
  
  
  const arrayTeste = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];//teste
  MinMax(arrayTeste);
  