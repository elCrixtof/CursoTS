"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumaN = function (a, b) {
        return a + b;
    };
    var sumaF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            console.log(this.nombre + " smash!!!");
        }
    };
    hulk.smash();
})();
