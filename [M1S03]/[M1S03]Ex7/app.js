const retornarPessoa = ({ nome, idade, profissao }) => {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

//objeto do exercicio
const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};


const mensagem =retornarPessoa(pessoa);//exemplo
console.log(mensagem);
