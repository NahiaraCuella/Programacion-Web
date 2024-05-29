
const numbers = [5, -10, -2, -25, -7, 1]
const numerosAbsolutos = [];

function sortAbsoluteNumbers(numbers){
    for(let i = 0; i <numbers.length; i++){
        const absolute = Math.abs(numbers[i])
        numerosAbsolutos.push(absolute) 
    }
    const sorted = numerosAbsolutos.sort((a,b) => a-b)
    return sorted 
}
console.log(sortAbsoluteNumbers(numbers));