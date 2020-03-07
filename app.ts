(function () {

    const miFuncion = function ( a: string) {
        return a.toUpperCase();
    }

    const miFuncionF = (a:string) => a.toUpperCase()

    const sumaN = function(a:number, b:number){
        return a + b;
    }

    const sumaF = (a:number, b:number) => a+b;

    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout();

            console.log(`${this.nombre} smash!!!` );
        }
    }

    hulk.smash()
})();
