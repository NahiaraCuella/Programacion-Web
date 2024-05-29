
const words = ['hola', 'tres', 'uno','Universidad', 'de','Buenos Aires','pepito','celular']

const word = 'pepito'

function buscaPalabras(words,word){

    const indice = words.indexOf(word);
    const palabraLarga = words.filter((word) => {
         return word.length > indice;
    
    })
  return palabraLarga;
}
console.log(buscaPalabras(words,word))