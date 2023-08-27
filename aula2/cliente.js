"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var contrato_1 = require("./contrato");
var id_cliente = 0;
var Cliente = /** @class */ (function () {
    function Cliente(name) {
        this.name = name;
        this.id = id_cliente;
        this.saldo = 500;
    }
    Cliente.prototype.AlugarBike = function (dias, dono, bike_escolhida) {
        return new contrato_1.Contrato(this, dono, bike_escolhida, dias);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
