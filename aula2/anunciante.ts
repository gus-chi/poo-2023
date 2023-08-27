import {Contrato} from './contrato'
import {Bike} from './bike'
var id_anunciante= 0
var index_bike = 0
export class Anunciante{
    name: string
    id: number
    saldo: number
    bike: Bike
    constructor(name: string){
        this.name = name
        this.id = id_anunciante
        this.saldo = 0
        id_anunciante++
    }
    //SetEstadoContrato(ativo: boolean){
    //    this.contrato.ativo = ativo;
    //}
    AnunciarBike(taxa: number){
        this.bike = new Bike("Disponivel")   
        this.bike.taxa_por_dia = taxa
    }
}
