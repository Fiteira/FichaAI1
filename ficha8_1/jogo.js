const quizData = [
  {
    question: 'O que significa a sigla HTML?',
    a: 'Hypertext Medium Language',
    b: 'Hypertext Markup Lingo',
    c: 'Hypertext Markup Language',
    d: 'Hypertext Minimum Language',
    correct: 'c',
  },
  {
    question: 'Qual a instrução que indica ao browser qual o tipo de documento que ele vai abrir?',
    a: '<!DOCTYPE html>',
    b: '<html lang="pt-pt">',
    c: '<meta charset="utf-8" />',
    d: '<body>',
    correct: 'b',
  },
  {
    question: 'Que extensão devem ter os ficheiros HTML?',
    a: '.html',
    b: '.htm',
    c: '.webpage',
    d: '.index',
    correct: 'a',
  },
  {
    question: 'O elemento <title> permite definir o título:',
    a: 'da página e aparecer na barra de título do browser',
    b: 'de uma imagem',
    c: 'para um segmento da página',
    d: 'de uma tabela',
    correct: 'a',
  },
  {
    question: 'Onde deverá estar posicionado o elemento <head>?',
    a: 'Dentro do elemento <html>',
    b: 'Dentro do elemento <h1>',
    c: 'Dentro do elemento <body>',
    d: 'Dentro do elemento <p>',
    correct: 'b',
  },
];

/*Grabing all the elements */
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const d = document.getElementById('d+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');


let index = 0;
let score = 0;

function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}


function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}


function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
  d.innerText = quizData[index].d;
}


function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score=score+5;
      }else
      {
        score=score-2;
        if(score<=0)
         score=0; 
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      question.innerHTML= `<h2>Pontuacao ${score} <\h2> <button onclick="location.reload()">Recomeçar</button>`
      
    }
  });
}
getquiz();
startquiz();