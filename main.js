const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for(let i=0; i <botoes.length;j++){
    botoes[i].onclick = function (){
        for(let j=0;j<botoes.length;j++){ 
            botoes[j].classList.removem("ativo");
            textos[j.classlist.remove("ativo")]

}
botoes[i].classList.add("ativo");
botoes[i].classList.add("ativo");
    }
}
cons contadores= document.queryselectorA11(".contador");
const tempcontaoObjetivo1 = new date("2030-02-21T00:00:00");
let tempoAtual =new date();
contadores[0].textcontent =tempoObjetivo1 - tempoAtual;