//criação das constantes para manipular os elementos HTML

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação
const perguntas = [
    {
        enunciado: "O que os porquinhos-da-índia comem para se manterem saudáveis?

",
        alternativas: [
            {
            texto: "Eles precisam de uma dieta rica em feno, vegetais frescos (como cenoura, couve e pimentão) e ração específica. Também é essencial fornecer vitamina C, pois eles não produzem essa vitamina naturalmente.

",
            afirmacao: "Porquinhos-da-índia precisam de vitamina C na alimentação, pois não produzem essa vitamina naturalmente.

. "
            },
            {
            texto: "Alternativa2",
            afirmacao: "Porquinhos-da-índia podem se alimentar apenas de ração para cães e gatos, pois é suficiente para sua saúde"
            },
        ]
    },
    {
        enunciado: "Como os porquinhos-da-índia se comunicam entre si e com os humanos?

",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Alternativa2",
            afirmacao: "afirmacao1"
            },
        ]
    },
    {
        enunciado: "Por que é importante manter os porquinhos-da-índia em pares ou grupos",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Alternativa2",
            afirmacao: "afirmacao1"
            },
        ]
    },

];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();

