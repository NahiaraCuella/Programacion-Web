//En un restaurante se reciben pedidos de comida a domicilio.Vamos a escribir una funcion procesarPedidos
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array  lacadena de texto "bebida",ya que es una promoción que tenemos.
//Despues añadimos al final del array el nombre del usuario que sacamos antes.

const pedidos = ["Juan", "Hamburguesa", "Papas fritas", "Pizza"];

function procesarPedido(pedidos) {

    const nombreCliente = pedidos.shift();
    pedidos.unshift('bebida')
    pedidos.push(nombreCliente)
    
    return pedidos;
}
console.log(procesarPedido(pedidos));

