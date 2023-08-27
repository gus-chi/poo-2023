"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    // juros?
    function Bike(status) {
        this.status = status;
    }
    Bike.prototype.setStatus = function (validade) {
        if (validade > 0)
            this.status = "Disponivel";
        else {
            this.status = "Bloqueado";
        }
    };
    return Bike;
}());
exports.Bike = Bike;
