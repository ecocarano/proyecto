const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-184-72-236-57.compute-1.amazonaws.com',
    database: 'dv0rj3gp371m9',
    user: 'weimnuhhmrvnzr',
    password: '0a2cb3c30be52735ecf62b33e5531c87f3b5ab27447b4f4dd452d45b218c25d6',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});


const controller = (req, res) => {
    res.render('indexprincipal.html');
};
const login = (req, res) => {
    res.render('indexlogin.html');
};

const admmodulo = (req, res) => {
    res.render('index.html');
};



const RegistrarRestaurante = (req, res) => {
    res.render('RegistroRestaurantes.html');
};


const indexReserva = (req, res) => {
    res.render('indexReserva.html');
};
//reserva


const consultaReserva = async (req, res) => {
    const response = await pool.query('SELECT * FROM reserva');

    return response.rows;
};

const MostrarReserva = async (req, res) => {
    const response = await consulta();
    //console.log(response.rows);
    res.render('indexReserva.html', { datos: response });
};




const addreserva = async (req, res) => {
    const { idreserva, nombres, apellidos, correo, asunto, mensaje, fechainicio, fechafin, actividad, hotel, transporte } = req.body;

    if (idreserva == 0) {
        const response = await pool.query('INSERT INTO reserva (nombres,  apellidos, correo, asunto, mensaje, fechainicio,fechafin,actividad,hotel ,transporte) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10)', [nombres, apellidos, correo, asunto, mensaje, fechainicio, fechafin, actividad, hotel, transporte]);
    } else {
        const response = await pool.query('UPDATE reserva SET nombres = $1, apellidos = $2,correo=$3, asunto=$4, mensaje=$5, fechainicio=$6, fechafin=$7, actividad=$8, hotel=$9, transporte=$10  WHERE idreserva= $11', [nombres, apellidos, correo, asunto, mensaje, fechainicio, fechafin, actividad, hotel, transporte, idreserva,]);
    }

    const response2 = await consultaReserva();
    res.render('indexReserva.html', { datos: response2 });
};



const MostrarReservas = async (req, res) => {
    const response = await consultaReserva();
    //console.log(response.rows);
    res.render('RegistroReservas.html', { datos: response });
};

const consulta = async (req, res) => {
    const response = await pool.query('SELECT * FROM Hotel');

    return response.rows;
};

const MostrarHoteles = async (req, res) => {
    const response = await consulta();
    //console.log(response.rows);
    res.render('RegistroHoteles.html', { datos: response });
};

const Hoteles = async (req, res) => {
    const response = await consulta();
    //console.log(response.rows);
    res.render('hoteles.html', { datos: response });
};


const addUser = async (req, res) => {
    const { IdHotel, NombreHotel, Direccion, Telefono, Correo } = req.body;

    if (IdHotel == 0) {
        const response = await pool.query('INSERT INTO Hotel (nombrehotel, direccion, telefono, correo) VALUES ($1, $2,$3,$4)', [NombreHotel, Direccion, Telefono, Correo]);
    } else {
        const response = await pool.query('UPDATE Hotel SET nombrehotel = $1, direccion = $2,telefono=$3,correo=$4  WHERE IdHotel= $5', [NombreHotel, Direccion, Telefono, Correo, IdHotel,]);
    }

    const response2 = await consulta();
    res.render('RegistroHoteles.html', { datos: response2 });
};

const delUser = async (req, res) => {
    const IdHotel = req.params.IdHotel;

    const response = await pool.query('DELETE FROM Hotel WHERE idhotel=$1', [IdHotel]);

    const response2 = await consulta();
    res.render('RegistroHoteles.html', { datos: response2 });
};

const getDatoById = async (req, res) => {
    const IdHotel = req.params.IdHotel;

    const response = await pool.query('SELECT * FROM Hotel WHERE idhotel=$1', [IdHotel]);

    const response2 = await consulta();
    res.render('RegistroHoteles.html', { datos: response2, registro: response.rows });
};

// reserva

const consultarestaurante = async (req, res) => {
    const response = await pool.query('SELECT * FROM restaurante');
    return response.rows;
};

const Mostrarrestaurante = async (req, res) => {
    const response = await consultarestaurante();
    //console.log(response.rows);
    res.render('RegistroRestaurantes.html', { restaurante: response });
};

const Restaurantes = async (req, res) => {
    const response = await consultarestaurante();
    //console.log(response.rows);
    res.render('Restaurantes.html', { restaurante: response });
};


const addrestaurante = async (req, res) => {
    const { idrestaurante, nombrerestaurante, direccion, telefono, correo } = req.body;

    if (idrestaurante == 0) {
        const response = await pool.query('INSERT INTO restaurante (nombrerestaurante, direccion, telefono, correo) VALUES ($1, $2,$3,$4)', [nombrerestaurante, direccion, telefono, correo]);
    } else {
        const response = await pool.query('UPDATE restaurante SET nombrerestaurante = $1, direccion = $2,telefono=$3,correo=$4  WHERE idrestaurante= $5', [nombrerestaurante, direccion, telefono, correo, idrestaurante,]);
    }

    const response2 = await consultarestaurante();
    res.render('RegistroRestaurantes.html', { restaurante: response2 });
};

const delrestaurante = async (req, res) => {
    const idrestaurante = req.params.idrestaurante;

    const response3 = await pool.query('DELETE FROM restaurante WHERE idrestaurante=$1', [idrestaurante]);

    const response = await consultarestaurante();
    res.render('RegistroRestaurantes.html', { restaurante: response });
};

const editarrestaurante = async (req, res) => {
    const idrestaurante = req.params.idrestaurante;

    const response = await pool.query('SELECT * FROM restaurante WHERE idrestaurante=$1', [idrestaurante]);

    const response3 = await consultarestaurante();
    res.render('RegistroRestaurantes.html', { restaurante: response3, registro: response.rows });
};

const consultaLogin = async (usuario, contrasena) => {
    const response = await pool.query('SELECT * FROM administrador where usuario=$1 and contrasena=$2', [usuario, contrasena]);
    return response.rows;
};

const Login = async (req, res) => {
    console.log('hoooolaaaaaa')
    const { usuario, contrasena } = req.body;
    const login = await consultaLogin(usuario, contrasena);
    if (login == 0) {
        res.render("indexlogin.html");
    } else {
        res.render("index.html");
    }
};

const consultaractividad = async (req, res) => {
    const response = await pool.query('SELECT * FROM actividad');
    return response.rows;
};

const Mostraractividad = async (req, res) => {
    const response = await consultaractividad();
    //console.log(response.rows);
    res.render('RegistroActividades.html', { actividad: response });
};

const Actividades = async (req, res) => {
    const response = await consultaractividad();
    //console.log(response.rows);
    res.render('Actividades.html', { actividad: response });
};

const addactividad = async (req, res) => {
    const { idactividad, nombreactividad , descripcionactividad} = req.body;

    if (idactividad == 0) {
        const response = await pool.query('INSERT INTO actividad ( nombreactividad , descripcionactividad) VALUES ($1, $2)', [nombreactividad,descripcionactividad]);
    } else {
        const response = await pool.query('UPDATE actividad SET nombreactividad = $1, descripcionactividad = $2 WHERE idactividad= $3', [nombreactividad, descripcionactividad,idactividad,]);
    }

    const response2 = await consultaractividad();
    res.render('RegistroActividades.html', { actividad: response2 });
};

const delactividad = async (req, res) => {
    const idactividad= req.params.idactividad;

    const response3 = await pool.query('DELETE FROM actividad WHERE idactividad=$1', [idactividad]);

    const response = await consultaractividad();
    res.render('RegistroActividades.html', { actividad: response });
};

const editaractividad = async (req, res) => {
    const idactividad = req.params.idactividad;

    const response = await pool.query('SELECT * FROM actividad WHERE idactividad=$1', [idactividad]);

    const response3 = await consultaractividad();
    res.render('RegistroActividades.html', { actividad: response3, registro: response.rows });
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
const consultartransporte = async (req, res) => {
    const response = await pool.query('SELECT * FROM transporte');
    return response.rows;
};

const MostrarTransporte = async (req, res) => {
    const response = await consultartransporte();
    //console.log(response.rows);
    res.render('RegistroTransporte.html', { transporte: response });
};

const Transporte = async (req, res) => {
    const response = await consultartransporte();
    //console.log(response.rows);
    res.render('transportes.html', { transporte: response });
};

const addTransporte = async (req, res) => {
    const { idtransporte, nombretransporte, descripciontransporte,lugarinicio,lugardestino,valor} = req.body;

    if (idtransporte == 0) {
        const response = await pool.query('INSERT INTO transporte(nombretransporte , descripciontransporte , lugarinicio , lugardestino , valor) VALUES ($1,$2,$3,$4,$5)', [nombretransporte,descripciontransporte,lugarinicio,lugardestino,valor]);
    } else {
        const response = await pool.query('UPDATE transporte SET nombretransporte = $1, descripciontransporte = $2, lugarinicio = $3, lugardestino = $4,valor =$5 WHERE idtransporte= $6', [nombretransporte, descripciontransporte,lugarinicio,lugardestino,valor,idtransporte]);
    }

    const response2 = await consultartransporte();
    res.render('RegistroTransporte.html', { transporte: response2 });
};

const delTransporte = async (req, res) => {
    const idtransporte= req.params.idtransporte;

    const response3 = await pool.query('DELETE FROM transporte WHERE idtransporte=$1', [idtransporte]);

    const response = await consultartransporte();
    res.render('RegistroTransporte.html', { transporte: response });
};

const editartransporte = async (req, res) => {
    const idtransporte = req.params.idtransporte;

    const response = await pool.query('SELECT * FROM transporte WHERE idTransporte=$1', [idtransporte]);

    const response3 = await consultartransporte();
    res.render('RegistroTransporte.html', { transporte: response3, registro: response.rows });
};



module.exports = {
    controller, login, admmodulo, RegistrarRestaurante,
    MostrarHoteles, addUser, delUser, getDatoById, Hoteles, indexReserva,

    consultaReserva, MostrarReserva, addreserva, MostrarReservas, Login,Actividades,delactividad,editaractividad,

    Restaurantes,consultarestaurante, Mostrarrestaurante, addrestaurante, delrestaurante, editarrestaurante,Mostraractividad,addactividad,

    consultartransporte,Transporte,MostrarTransporte, addTransporte,delTransporte,editartransporte,Actividades
};