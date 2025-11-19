//importa o array de alunos do arquivo bancoDados.mjs
import { alunos } from "./bancoDados.mjs";

//seleciona o container onde os cards dos alunos serao exibidos
const container = document.querySelector(".container");

//função para montar o boletim do aluno recebendo o array de notas
function boletin(notas) {
  //variavel para guardar as linhas da tabela
  let linha = "";
  //percorre o array de notas do aluno
  for (const item of notas) {
    //adiciona uma linha na tabela para cada nota do aluno
    linha += `<tr>
           <td>${item.materia}</td>
            <td>${item.nota}</td>
          </tr>`;
  }
  // retorna as linhas da tabela
  return linha;
}

//função para adicionar avatar ao card
function avatar(card, foto, nome) {
  // cardclone guarda o conteudo original do card
  let cardClone = card.innerHTML;
  //adiciona evento de click ao card
  card.addEventListener("click", (event) => {
    //isRotate verifica se o card ja esta rotacionado ou nao
    let isRotate = card.classList.toggle("rotate");

    //se estiver rotacionado, limpa o conteudo do card para adiciona a imagem de fundo

    //se nao estiver rotacionado, restaura o conteudo original do card
    if (isRotate) {
      card.innerHTML = `<div class="card-content"></div>`;
      let content = card.querySelector(".card-content");
      content.style.width = "100%";
      content.style.height = "100%";
      //adiciona a imagem de fundo ao card
      content.style.backgroundImage = `url('${foto}')`;
      //estiliza a imagem de fundo
      content.style.backgroundRepeat = "no-repeat";
      //ajusta o tamanho da imagem de fundo
      content.style.backgroundSize = "cover";
      //centraliza a imagem de fundo
      content.style.backgroundPosition = "center";
      content.dataset.label = nome;
    } else {
      //restaura o conteudo original do card
      card.innerHTML = cardClone;
      //remove a imagem de fundo do card
      card.style.backgroundImage = "";
    }
  });
}

//função para exibir os alunos na tela
function exebirAlunos(listaAlunos = alunos) {
  //limpa o conteudo do container
  container.innerHTML = "";
  //percorre a lista de alunos do banco de dados
  for (const aluno of listaAlunos) {
    //cria um elemento div para o card do aluno
    let card = document.createElement("div");
    // adiciona a classe card ao elemento div
    card.classList.add("card");
    //adiciona o conteudo do card com as informações do aluno
    card.innerHTML += `
   <div class="card-content ">
          <div class="head-card">
        <h1>${aluno.nome}</h1>
        <p>${aluno.idade} anos</p>
      </div>
      <div class="card-body">
        <h2>Notas</h2>
        <table class="boletin">
          <tr>
            <th>Disciplina</th>
            <th>nota</th>
          </tr>
         ${boletin(aluno.notas)}
          
        </table>
      </div>
      <h2>Media Geral</h2>
      
     <p class="media">${media(aluno.notas).toFixed(2)}</p>
     </div>`;
    card.dataset.label = aluno.nome;
    //adiciona o card ao container
    container.appendChild(card);
    //adiciona o avatar ao card do aluno com a foto do aluno do banco de dados
    avatar(card, aluno.foto, aluno.nome);
  }
}

//função para calcular a media das notas do aluno
function media(notas = []) {
  //variaveis para soma das notas e total de notas
  let somaNotas = 0;
  //total de notas para calcular a media soma de todas as notas dividido pelo total de notas
  let total = 0;
  //percorre o array de notas do aluno
  for (const objNota of notas) {
    //soma as notas
    somaNotas += objNota.nota;
    //incrementa o total de notas
    total++;
  }
  //retorna a media das notas
  return somaNotas / total;
}

//chama a função para exibir os alunos na tela
exebirAlunos(alunos);