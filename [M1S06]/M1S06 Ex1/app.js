function sleep(valor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(valor);
      }, 3000);
    });
  }
  
  sleep("Hello World").then(valor => console.log(valor));
  