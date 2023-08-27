"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contrato = void 0;
var Contrato = /** @class */ (function () {
    function Contrato(cliente, anunciante, bike, validade) {
        this.cliente = cliente;
        this.anunciante = anunciante;
        this.validade = validade;
        this.bike = bike;
        this.DefinirEstado(this.validade);
    }
    Contrato.prototype.DefinirEstado = function (validade) {
        this.validade = validade;
        if (validade >= 0 && this.cliente.saldo > validade * this.bike.taxa_por_dia) {
            this.estado = true;
        }
        else if (this.cliente.saldo < validade * this.bike.taxa_por_dia) {
            console.log("Impossivel realizar contrato saldo cliente insuficiente para o numero de dias");
            this.estado = false;
        }
        this.bike.setStatus(validade);
    };
    Contrato.prototype.Cobrar = function () {
        this.validade--;
        this.cliente.saldo -= this.bike.taxa_por_dia;
        this.anunciante.saldo += this.bike.taxa_por_dia;
        this.DefinirEstado(this.validade);
    };
    return Contrato;
}());
exports.Contrato = Contrato;
