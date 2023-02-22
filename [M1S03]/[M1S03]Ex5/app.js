const somaTudo = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  
  const resultado = somaTudo(1, 2, 3, 4);//exemplo do exercício
  console.log(resultado);
  