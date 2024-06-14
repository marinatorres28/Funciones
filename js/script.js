//Sumar con funciones

// console.log("Salida 1 de la Función");

// sumar();

// console.log("*********************");

// function sumar() {
//     let suma = 5 + 9;
//     console.log(suma);
// }

// console.log("Salida 2 de la Función");

// sumar();

// //Funcion con otra función dentro

// function mostrar() {
//     console.log("Estoy dentro de la función Mostrar y llamo la función sumar");
//     sumar();
// }

// mostrar();

// //Funcion con parámetros

// let mensaje1 = "Hola, Cristina";
// let mensaje2 = "Voy al Médico";

// function mostrarMensaje(texto) {
//     //alert(texto);
// }

// mostrarMensaje(mensaje1);
// mostrarMensaje(mensaje2);


// let numero=prompt("Escribe un número");

// function raizCuadrada(num){
//     alert(Math.sqrt(num))
// }

// raizCuadrada(numero);

//Funcion con return

//EJERCICIO 
//Pide 10 veces un numero y muestra cada vez si es par o impar
// let numeroPar;

// function esPar(numero) {
//     if (numero % 2 == 0) return true;
//     else return false;
// }

// //let respuesta = esPar(numeroPar); //respuesta es un booleano

// function mostrarRespuesta(respuesta) {
//     if (respuesta) { //respuesta=true
//         alert("Es par");
//     } else { //respuesta=false
//         alert("Es impar");
//     }
// }

// for (let i = 0; i < 10; i++) {

//     numeroPar = prompt("Indica un número");

//     respuesta=esPar(numeroPar);

//     mostrarRespuesta(respuesta);

// }


// var mensaje="Mensaje fuera de la funcion"; //variable global

// function mostrarMensaje(){

//     var mensaje="Mensaje dentro de la función" //variable local
//     console.log(mensaje);
// }

// console.log(mensaje);
// mostrarMensaje();

// var numero1=7;
// var numero2=8;

// function menor(primero,segundo){
//     //asigna el valor de primero a elMenor
//     var elMenor=primero; 
//     //si el segundo es menor que primero
//     if(segundo<primero){ 
//         //se asigna elMenor a segundo
//         elMenor=segundo;
//     }
//     return elMenor;
// }
// console.log(menor(numero1,numero2));



/* PRACTICA */

//creamos un mapa que contenga un pais y su capital,para crear un desplegable 
let mapa = new Map([["España", "Madrid"], ["Francia", "Paris"], ["Italia", "Roma"], ["Portugal", "Lisboa"]]);

//leemos un elemento select que ya esta creado en el html,con el id
let select = document.querySelector("#paises");

//recorremos el mapa con bucle for of
for (let [pais, capital] of mapa) {
    let paisOpcion = document.createElement("option");
    paisOpcion.textContent = pais;
    paisOpcion.setAttribute("id", pais);
    select.appendChild(paisOpcion);
}

select.addEventListener("change", function () {
    //llamamos a la funcion quitarBorde para quitar los bordes al seleccionar otra imagen
    quitarBorde();
    
    let capitalSalida = mapa.get(select.value);

    //get recupera el valor que tiene el mapa en la clave que se lee en el select 
    document.querySelector("#capital").innerHTML = "La capital es " + capitalSalida;

    //cada vez que seleccionamos la capital en el desplegable, modificamos el borde de las imagenes 
    document.querySelector("#" + capitalSalida).style.border = "4px solid white";
})

//se crea un array con todas las imagenes que hemos metido en html
let imagenes = document.querySelectorAll("img");

//recorremos el array con bucle for
for (let i = 0; i < imagenes.length; i++) {
    //hacemos un evento para cuando pasemos por encima cambie el tamaño
    imagenes[i].addEventListener("mouseover", function () {
        imagenes[i].style.width = "275px";
    })
    //para que vuelva al tamaño original
    imagenes[i].addEventListener("mouseout", function () {
        imagenes[i].style.width = "250px";
    })
}


function quitarBorde(){
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.border="none";
        
    }

}