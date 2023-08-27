import {Cliente} from './cliente'
import {Anunciante} from './anunciante'
import { Bike } from './bike'
export class Contrato{
    private validade: number // x dias / vencido
    // juros?
    anunciante: Anunciante
    bike: Bike
    cliente: Cliente
    estado: boolean // ativo/inativo
    constructor(cliente: Cliente, anunciante: Anunciante, bike: Bike,validade: number){
        this.cliente = cliente
        this.anunciante = anunciante
        this.validade = validade
        this.bike = bike
        this.DefinirEstado(this.validade)
    }
    DefinirEstado(validade: number){
        this.validade = validade
        if(validade >=0 && this.cliente.saldo > validade*this.bike.taxa_por_dia){ 
            this.estado = true
        }
        else if(this.cliente.saldo < validade*this.bike.taxa_por_dia){
            console.log("Impossivel realizar contrato saldo cliente insuficiente para o numero de dias")
            this.estado = false

        }
        this.bike.setStatus(validade)

    }
    Cobrar(){
        this.validade--
        this.cliente.saldo -= this.bike.taxa_por_dia
        this.anunciante.saldo += this.bike.taxa_por_dia
        this.DefinirEstado(this.validade)
    }

}