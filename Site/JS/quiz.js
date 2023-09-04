const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")
const contagem = document.querySelector(".contador")
const nCorretas = document.querySelector(".corretas")
const nErradas = document.querySelector(".erradas")
let questaoAtual = 0
let alternativaCorretaAtual
let contacertos = 0
let conterros = 0
const nQuestao = document.querySelector(".QuestaoAtual")

async function main() {
  const requisicao = await fetch("questoes.json")
  const quiz = await requisicao.json()
  

  function carregarAlternativa(numeroDaAlternativa) {
    if (nCorretas+1 >= quiz.length){
      pergunta.innerHTML = 'Parabéns, você terminou o quiz!'
      alternativas.innerHTML = ''
      return
    }
    const alt = quiz[numeroDaAlternativa]
    alternativaCorretaAtual = alt.correta
    pergunta.innerHTML = alt.pergunta

    alternativas.innerHTML = ""
    // quiz[0].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt}</button>`);
    for (let i = 0; i <= 9; i++) {
      alternativas.innerHTML += `<button>${alt.alternativas[i]}</button>`
    }
  }
  
  alternativas.addEventListener("click", ev => {
    const listaDeFilhos = [...alternativas.children]
    const alternativaCorretaClicada = listaDeFilhos.indexOf(ev.target)
    if (alternativaCorretaClicada == alternativaCorretaAtual){
      carregarAlternativa(++questaoAtual)
      ++contacertos
      nCorretas.innerHTML = contacertos
      nQuestao.textContent = questaoAtual+1
      return 
    }
    ++conterros
    nErradas.innerHTML = conterros
    alert("errou bestão!")
  })
  
  nQuestao.textContent = questaoAtual+1
  carregarAlternativa(questaoAtual)
}

main()