const numbers = [1, 2, 4, 4, 5, 6];
const names = ["pepe", "carlos", "juan"];
let contador = 0;
//while
while (contador < numbers.length) {
  //console.log(numbers[contador]);
  contador++;
}

//for
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
//funcion flecha o arrow function
const arr = () => {};

//funcion regular
function arr1() {}

//forEach
names.forEach((element) => {
  console.log(element);
});