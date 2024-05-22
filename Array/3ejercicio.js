const lista = [1,2,4,5,5,6,6,7] 

let total = 0;
let contador = 0

function sumamosPares(numeros) {
    
    while(contador <numeros.length){
       if(numeros[contador]% 2 == 0){
        total = total + numeros[contador];
       }
       contador++;
    }
    return total;
}
console.log(sumamosPares(lista));

