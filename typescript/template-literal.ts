(function () {

    function getEdad (){
        return 100 + 100 + 300
    }

    const nombre = 'Crixtof';
    const apellido = 'acosta'
    const edad = 21;

    // const salida = nombre + apellido + edad
    // const salida = nombre + " " + apellido + " (" + edad + ")" 
    const salida = `${nombre} \n${apellido} \n${edad + getEdad()}`;
    //crxtof acosta (edad:33)
    console.log(salida)

})();
