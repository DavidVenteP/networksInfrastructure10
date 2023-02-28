const {Router} = require('express');
const router = Router();
const negocio = require('./negocio/negocio');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
var path = require('path');
router.get('/', (req, res) => {
res.sendFile(path.resolve('./src/vista/index.html'));
});
router.get('/consultar', (req, res) => {
res.sendFile(path.resolve('./src/vista/consulta.html'));
});
router.get('/ingresar', (req, res) => {
res.sendFile(path.resolve('./src/vista/ingreso.html'));
});
router.get('/traerProductos', negocio.traerProductos);
router.post('/ingresarProductos', negocio.ingresarProductos);
module.exports = router;
