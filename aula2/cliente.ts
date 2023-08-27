import { Anunciante } from "./anunciante"
import { Bike } from "./bike"
import { Contrato } from "./contrato"
let id_cliente = 0
export class Cliente{
    id: number
    name: string
    saldo: number
    constructor(name: string){
        this.name = name
        this.id = id_cliente
        this.saldo = 500
    }
    AlugarBike(dias: number, dono: Anunciante, bike_escolhida: Bike): Contrato{// quanto tempo, de quem, qual
        return new Contrato(this, dono, bike_escolhida, dias)
    }
    
}