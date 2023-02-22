const verificaPalindromo = (palavra) => {
    const palavraAocontrario = palavra.split("").reverse().join("");
    return palavra === palavraAocontrario;
  }
  
  
  const teste1 = verificaPalindromo("ana");//exemplo exercício
  console.log(teste1); // true
  
  const teste2 = verificaPalindromo("julia");
  console.log(teste2); // false