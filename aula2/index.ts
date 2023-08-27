import {Cliente} from './cliente'
import {Contrato} from './contrato'
import {Anunciante} from './anunciante'
import {Bike} from './bike'

let teste_anunciante = new Anunciante("Gustavo")
teste_anunciante.AnunciarBike(50) // 100 reais por dia
let teste_cliente = new Cliente("Jailton")
console.log(teste_anunciante.bike.status);
let contrato = teste_cliente.AlugarBike(5, teste_anunciante, teste_anunciante.bike)
console.log(contrato.estado)
console.log(teste_anunciante.bike.status);
let i = 5
while(i>0){
console.log("Dinheiro Anunciante:", teste_anunciante.saldo)
console.log("Dinheiro Cliente:", teste_cliente.saldo)
if(contrato.estado)
    contrato.Cobrar()
i--
}
