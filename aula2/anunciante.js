"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anunciante = void 0;
var bike_1 = require("./bike");
var id_anunciante = 0;
var index_bike = 0;
var Anunciante = /** @class */ (function () {
    function Anunciante(name) {
        this.name = name;
        this.id = id_anunciante;
        this.saldo = 0;
        id_anunciante++;
    }
    //SetEstadoContrato(ativo: boolean){
    //    this.contrato.ativo = ativo;
    //}
    Anunciante.prototype.AnunciarBike = function (taxa) {
        this.bike = new bike_1.Bike("Disponivel");
        this.bike.taxa_por_dia = taxa;
    };
    return Anunciante;
}());
exports.Anunciante = Anunciante;
