import { Anunciante } from "./anunciante"
import {Cliente} from "./cliente"
export class Bike{
    status: string
    taxa_por_dia: number // x R$ do cliente para o dono com base nos dias
    // juros?
    constructor(status: string){
        this.status = status
    }
    setStatus(validade: number){
        if(validade > 0)
            this.status = "Disponivel"
        else{
            this.status = "Bloqueado"
        }
    }
}
