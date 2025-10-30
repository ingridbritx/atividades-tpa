let listaAlunos = []

let aluno = {
    nome: "Alessandro",
    notas: [7,8,9],
    media: function (){
        let soma = 0;
        for(let i = 0; i < this.notas.length; i++) {
          soma = soma + this.notas[i];
        }
        return soma/this.notas.length;
      }
    };

    console.log(aluno.nome);      
    console.log(aluno.media());  
