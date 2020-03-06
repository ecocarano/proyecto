create table Hotel(
    Idhotel SERIAL PRIMARY KEY,
    NombreHotel varchar(30),
    Direccion varchar(30),
    Telefono int,
    Correo varchar(30)
);

create table reserva(
    idreserva SERIAL PRIMARY KEY,
    nombres varchar(30),
    apellidos varchar(30),
    correo varchar(30),
    asunto varchar(30),
    mensaje varchar(30),
    fechainicio date,
    fechafin date,
    actividad varchar(30),
    hotel  varchar(30),
    transporte varchar(30)
);

create table administrador(
    idadministrador SERIAL PRIMARY KEY,
    usuario varchar(30),
    contrasena varchar(30)
);