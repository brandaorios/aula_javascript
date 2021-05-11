function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado pela visita</b>";
  // alert("Obrigado pela Visita");
}

function redirecionar(){
    //window.open("https://jw.org/");
    //window.location.href = "https://jw.org/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "<b>Valews</b>";
   elemento.innerHTML = "Valews";
    
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse</b>";
    elemento.innerHTML =  "Passe o mouse";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
    
}

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0;
function validaIdade(idade){
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
    }

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

    //alert(soma( 5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));







/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/




/*
var count;
for (count=0; count <=5; count++){
    alert(count);
};


var count = 0;
while (count <=5 ){
    console.log(count);
    alert(count);
    count++;
};


var idade = prompt("Qual sua idade");
if (idade >=18){
    alert("Maior de idade");
}else{
        alert("Menor de Idade");
};
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);


/*
var fruta = (nome:"maça", cor:"vermelha")
console.log(fruta.nome);
alert(fruta.cor);
*/

//var nome = "Marcos Brandão";
//var n1 = 29;
//var n2 = 28;
//var frase = "Vasco melhor do mundo";
//alert("Bem vindo " + nome);
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Vasco", "Flamengo"));