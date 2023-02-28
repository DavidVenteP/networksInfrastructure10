const datos = require('../datos/datos');
async function traerProductos(req, res) {
    var arreglo = [];
    const resultado = await datos.leerBD();
    for (i = 0; i < resultado.length; i++) { //se lee el resultado y se arma el json
        json1 = {
            "id": resultado[i].id, "nombre": resultado[i].nombre,
            "descripcion": resultado[i].descripcion, "precio": resultado[i].precio
        };
        //console.log(json1); //se muestra el json en la consola
        arreglo.push(json1); //se añade el json al arreglo
    }
    //console.log(arreglo);
    res.json(arreglo);
}
async function ingresarProductos(req, res) {
    var nombre = req.body.nombre;
    var desc = req.body.descripcion;
    var precio = req.body.precio;
    var producto = { "nombre": nombre, "descripcion": desc, "precio": precio };
    //console.log(producto);
    const resultado = await datos.insertarBD(producto);
    res.send(resultado);
}
module.exports = {
    traerProductos, ingresarProductos
};
