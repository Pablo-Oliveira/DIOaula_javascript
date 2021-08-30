function repete(elemento) {
    elemento.innerHTML = "Ai, agora é só clicar.";
}

function clica(elemento) {
    elemento.innerHTML = "Clique Aqui";
}
function sobe(elemento) {
    elemento.innerHTML = "Sobe só um pouquinho...";
}

function voltar(elemento) {
    elemento.innerHTML = "Da uma moral, da um click neste botão aqui.";
}
function clicou() {

    alert("Validador de Idade ativado");

    var contador = 0;
    var nome = "";
    var idade = 0;
    while (contador < 2) {

        if (contador < 1) {
            nome = prompt("Qual a seu nome?");
            if (nome == null) {
                nome = "Meu caro";
            };
            idade = prompt("Qual a sua idade?");
            if (idade >= 18) {
                alert(`${nome} com ${idade} anos você é maior de idade.
        Tem certeza disso? Você pode tentar de novo se preferir?`);
            } else {
                alert(`${nome} você é menor de idade.
        Você tem certeza que deveria acessar esse conteúdo?`);
            };
        } else {
            idade = prompt("Qual a sua idade?");
            if (idade < 18) {
                alert(`Você tem certeza que deveria acessar esse conteúdo?`);
            } else {
                alert(`A legal. ${nome}, agora você já pode acessar a pagina a vontade.`);
            }
        }
        contador++;
        document.getElementById("texto2").innerHTML = "<h2>Você é 10, valeu pela moral.</h2>"
    }
    /* código da primeira parte da aula
    var idade2 = 10;
    var frase = "Japão é o melhor time do mundo"
    //alert(nome + " tem " + idade + " anos");
    //alert(idade);
    console.log(frase);
    console.log(frase.replace("Japão", "Brasil"));
    */
}