
// //ES7

// //Includes en arrays...

// let array = [4,"Manolo",334];

// if(array.includes("Manolo")){
//     console.log(array[1]," está entre nosotros");
// }else{
//     console.log("Manolo is not in");
// };

// //Exponenciación con **

// const base = 2;

// let exponente = 5;

// console.log(exponente ** base);

// //////////////////////////////////////////////////////

// //ES8

// //Object entries

// let alvaro = {
//     edad: 28,
//     localidad: "Torrente",
//     equipo: "Valencia",
//     hobbies : {
//         hobbie1: "programar JS",
//         hobbie2: "programar CSS",
//         hobbie3: "estudiar SCRUM"
//     }
// };

// console.log(Object.entries(alvaro));
// console.log(Object.values(alvaro));

// //padStart

// let name = "angel";

// console.log("angel".padStart(15));
// console.log("angel".padStart(15, "ab"));

// //padStart

// //exactamente lo mismo que el anterior pero al final del string
// console.log("angel ".padEnd(15,"ab"));

// //Object.getOwnPropertyDescriptors

// let roberto = {
//     edad: 30,
//     localidad: "La Pobla",
//     equipo: "Valencia"
// };

// console.log(Object.getOwnPropertyDescriptors(roberto));

// //ES9

// //finally () --> pendiente de ver post-promesas

// //Iteración asíncrona

// //array.flat()

// let enemigos = ["juan","aida","angel","callum","cristian",["tere","roberto","rodrigo",["juanma","alvaro","javier"]]];

// console.log(enemigos);
// enemigos = enemigos.flat();
// console.log(enemigos);
// enemigos = enemigos.flat();
// console.log(enemigos);

// //TrimStart 

// const telefono = "     963785521        ";

// let telefonoFixed = telefono.trimStart();

// console.log(telefono);
// console.log(telefonoFixed);

// //trimEnd lo mismo pero al final

// //toString

// const Aburrir = () => {
//     console.log("pobres alumnos, están FUNDIDOS");
// };

// console.log(Aburrir.toString());

// //ES11

// //nullish coalescing

// let nombre;

// let nombreAlternativo = "Ambrosio"

// console.log(nombre ?? nombreAlternativo);

// /* El nullish coalescing lo que hace es brindarnos una alternativa
// de valor (como una variable en el ejemplo) en el caso de que otra variable que 
// estábamos esperando resulte ser NULL o UNDEFINED */

// //optional chaining

// // let videojuegos = {
// //     juego1 : {
// //         titulo : "Age of Empires 2",
// //         year : "1999"
// //     },
// //     juego2 : {
// //         titulo : "Half Life",
// //         year: "1999"
// //     },
// //     juego3 : {
// //         titulo : "worms",
// //         year: "1996"
// //     }
// // };

// // console.log(videojuegos.juego1.year?.mes);

// //ES12

// //Asignación lógica &&

// let numero = 100;

// let numeroGrande = 1000;

// numero &&= numeroGrande;

// console.log(numero);

// //Asignación lógica ||

// let apellido = "Martinez";

// let apellido2;

// apellido ||= apellido2;

// //Asignación lógica ??

// let nombre3 = "Juan";

// let nombre4 = "";

// nombre3 ??= nombre4;

// console.log(nombre3);

// //String replace all

// let cadena = "Tu estás bien porque yo estoy bien";

// //let cadenaReemplazada = cadena.replace("bien", "mal");
// let cadenaReemplazada = cadena.replaceAll("bien", "mal");
// console.log(cadenaReemplazada);


// //Método privado de la clase

// class Comer {

//     #engullir(){
//         console.log("ñam ñam");
//     };
// }

// let hambre = new Comer();

//hambre.engullir(); la ejecución de este método daría error porque
//es privado al ámbito de la clase.


//////////////////////////////////////////////////

//GETTERS & SETTERS

class Usuario {
    constructor(){
        this.nombre = "Felipe";
    }

    get newName(){
        return this.nombre;
    }

    set newName(arg){
        this.nombre = arg;
    }
}

let user = new Usuario();

console.log(user.newName);

user.newName = "Julián";

console.log(user.newName);

user.nombre = "Rodolfo";

