// 1.
const Coche = {
    marca: "marca",
    modelo: "modelo",
    matricula: "matricula"
};

// 2.
const Casa = {
    codPostal: "codPostal",
    calle: "calle",
    portal: "portal",
    piso: "piso"
};

// 3.
const FullStackDeveloper = {
    lenguajes: ["lenguajes"],
    proyectos: ["proyecto"]
}

// 4.
const Perro = {
    nombre: "nombre",
    raza: "raza",
    color: "color",
    edad: "edad",
    ladrar () {console.log("Guau")},
    popo () {return Math.random()*3}
}

// 5.
let marcaPortatil = Portatil.marca;

// 6.
let marcaPortatil2 = Portatil["marca"];

// 7.
let grupos = Concierto.grupos;

// 8.
let RGB = [Led.rojo, Led.verde, Led.azul];

// 9.
Portatil.modelo = 'P345';

// 10.
Concierto.cartelera.push("Guns N' Roses");

// 11.
Concierto.fecha = new Date();

// 12.
Impresora.imprimiendo = {nombreArchivo: "archivo", copias: "copias", numPaginas: "paginas"};

// 13.
const Noticia = {
    titular: "titular",
    cuerpo: "cuerpo"
};

// 14.
const Persona = {
    nombre: "gregorio",
    apellidos: "tremont",
    edad: "24"
};

// 15.
const Avion = {
    numPasajeros: "pasajeros",
    despegar() {console.log('despegando')},
    volar() {console.log('llegando al destino')},
    aterrizar() {console.log('aterrizando')}
};

// 16.
const Paquete = {
    contenido: ["paquete"]
}

// 17.
const Pais = {
    numHabitantes: "habitantes",
    continente: "continente",
    gentilicio: "gentilicio"
}

// 18.
let codError = O_Error.codigo;

// 19.
let integrantes = Grupo.integrantes;

// 20.
let nivelesTinta = Impresora.tinta;

// 21.
let pixeles = Pantalla.pixeles;

// 22.
especificaciones = Movil['especificaciones'];

// 23.
Grupo.numIntegrantes = 5;

// 24.
Pantalla.dimensiones = '1920x1080';

// 25.
Led.encendido = (true == false || false == true);

// 26.
Movil.temperatura = '20º';
