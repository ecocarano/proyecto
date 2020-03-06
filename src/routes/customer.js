const{Router}=require('express');
const router=Router();

const{controller,login,admmodulo, MostrarHoteles,
    addUser, Hoteles, delUser, getDatoById,indexReserva,addreserva,MostrarReservas,
   Restaurantes,Mostrarrestaurante,addrestaurante,delrestaurante, editarrestaurante,Login,Mostraractividad,addactividad,delactividad,editaractividad,
   consultartransporte,Transporte,MostrarTransporte, addTransporte,delTransporte,editartransporte,Actividades
}=require('../controllers/index');

router.get('/',controller);
router.get('/login',login);
router.get('/Administrador',admmodulo);



router.get('/hoteles',Hoteles);
router.get('/indexReserva',indexReserva);
router.get('/Restaurantes',Restaurantes);
router.get('/transportes',Transporte);

router.post('/addDato', addreserva);
router.get('/MostrarReserva', MostrarReservas);

router.get('/RegistrarHoteles', MostrarHoteles);
router.post('/addDatos', addUser);

router.get('/delUser/:IdHotel', delUser);
router.get('/updateUser/:IdHotel', getDatoById);
//restaurante
router.get('/Mostrarrestaurante', Mostrarrestaurante);
router.post('/addDat', addrestaurante);
router.get('/delrestaurante/:idrestaurante', delrestaurante);
router.get('/updaterestaurante/:idrestaurante', editarrestaurante)

router.get('/Mostraractividad', Mostraractividad);
router.post('/addDa', addactividad);
router.get('/delactividad/:idactividad', delactividad);
router.get('/updateactividad/:idactividad', editaractividad)
router.get('/Actividades',Actividades);

router.get('/Mostrartransporte', MostrarTransporte);
router.post('/add', addTransporte);
router.get('/deltransporte/:idtransporte', delTransporte);
router.get('/updatetransporte/:idtransporte', editartransporte)

router.post('/Login', Login);
module.exports=router;