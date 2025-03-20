console.log('Hello World'); 
let numero = prompt('Digite seu número:');
function verificarPar(numero){

    if(numero % 2 === 0){
        console.log(numero + "é igual a par");

    }else{
        console.log(numero + "é igual a impar");

    }

}

verificarPar(numero);