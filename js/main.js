
//ES7

//Includes en arrays...

let array = [4,"Manolo",334];

if(array.includes("Manolo")){
    console.log(array[1]," está entre nosotros");
}else{
    console.log("Manolo is not in");
};

//Exponenciación con **

const base = 2;

let exponente = 5;

console.log(exponente ** base);

//////////////////////////////////////////////////////

//ES8

//Object entries

let alvaro = {
    edad: 28,
    localidad: "Torrente",
    equipo: "Valencia",
    hobbies : {
        hobbie1: "programar JS",
        hobbie2: "programar CSS",
        hobbie3: "estudiar SCRUM"
    }
};

console.log(Object.entries(alvaro));
console.log(Object.values(alvaro));

//padStart

let name = "angel";

console.log("angel".padStart(15));
console.log("angel".padStart(15, "ab"));

//padStart

//exactamente lo mismo que el anterior pero al final del string
console.log("angel ".padEnd(15,"ab"));

//Object.getOwnPropertyDescriptors

let roberto = {
    edad: 30,
    localidad: "La Pobla",
    equipo: "Valencia"
};

console.log(Object.getOwnPropertyDescriptors(roberto));

//ES9

//finally () --> pendiente de ver post-promesas

//Iteración asíncrona

//array.flat()

let enemigos = ["juan","aida","angel","callum","cristian",["tere","roberto","rodrigo",["juanma","alvaro","javier"]]];

console.log(enemigos);
enemigos = enemigos.flat();
console.log(enemigos);
enemigos = enemigos.flat();
console.log(enemigos);

//TrimStart 

const telefono = "     963785521        ";

let telefonoFixed = telefono.trimStart();

console.log(telefono);
console.log(telefonoFixed);

//trimEnd lo mismo pero al final

//toString

const Aburrir = () => {
    console.log("pobres alumnos, están FUNDIDOS");
};

console.log(Aburrir.toString());

//ES11

//optional chaining

let videojuegos = {
    juego1 : {
        titulo : "Age of Empires 2",
        year : "1999"
    },
    juego2 : {
        titulo : "Half Life",
        year: "1999"
    },
    juego3 : {
        titulo : "worms",
        year: "1996"
    }
};

console.log(videojuegos.juego1.year?.mes);