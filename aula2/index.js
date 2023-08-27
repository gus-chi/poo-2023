"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var anunciante_1 = require("./anunciante");
var teste_anunciante = new anunciante_1.Anunciante("Gustavo");
teste_anunciante.AnunciarBike(50); // 100 reais por dia
var teste_cliente = new cliente_1.Cliente("Jailton");
console.log(teste_anunciante.bike.status);
var contrato = teste_cliente.AlugarBike(5, teste_anunciante, teste_anunciante.bike);
console.log(contrato.estado);
console.log(teste_anunciante.bike.status);
var i = 6;
while (i > 0) {
    console.log("Dinheiro Anunciante:", teste_anunciante.saldo);
    console.log("Dinheiro Cliente:", teste_cliente.saldo);
    if (contrato.estado)
        contrato.Cobrar();
    i--;
}
