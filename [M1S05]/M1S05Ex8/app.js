import { Usuario } from './Usuario.js';

function autenticarUsuario() {
  
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  
  const usuario = new Usuario('Marcos', email, senha);

  
  const autenticado = usuario.autenticar(email, senha);

  
  const msgAutenticacao = document.getElementById('msgAutenticacao');
  if (autenticado) {
    msgAutenticacao.textContent = 'Autenticação bem-sucedida!';
  } else {
    msgAutenticacao.textContent = 'Email ou senha inválidos.';
  }
}

const btnAcessar = document.getElementById('btnAcessar');
btnAcessar.addEventListener('click', autenticarUsuario);
