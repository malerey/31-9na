// Funciones nativas - METODOS 

// Number()
// String()
// Boolean()

// Propiedades de strings
// LENGTH 
// const nombre = "Carola";
// const longitudDelNombre = nombre.length // es un NUMERO 

// const contrasenia = prompt("Escriba su contraseña")

// console.log(contrasenia.length)
// if (contrasenia.length <= 6) {
//   alert("Su contraseña es muy corta")
// }
// else {
//   alert("Contraseña valida")
// }

// FUNCIONES NATIVAS o METODOS de string 

// toLowerCase()
// toUpperCase()

// let nombre = "nati"
// let otroNombre = "jEnNi"

// console.log(  nombre.toUpperCase()  )
// console.log(  otroNombre.toLowerCase()  )

// charAt 
// const nombre = "M!ka"

// console.log( nombre.charAt(0)  ) // M
// console.log( nombre.charAt(1)  ) // i
// console.log( nombre.charAt(2)  ) // k 
// console.log( nombre.charAt(3)  ) // a 
// console.log( nombre.charAt(4)  ) // "" 

// slice 
// toma un String, y lo corta empezando por la posicion que le indiquemos
// y terminando en la posicion que le indiquemos

// const nombre = "Eliana"

// // el primer parametro es inclusivo, el segundo no lo es
// console.log(nombre.slice(1, 4)) // lia

// // El segundo parametro es opcional: si no esta, se llega hasta el final del string
// console.log(nombre.slice(1)) // liana 

// tengo que agarrar la primer letra y convertirla a mayuscula
// tengo que agarrar el resto del nombre y convertirlo a minuscula
// tengo que unir ambas partes 


// const nombreUsuario = prompt("Decime tu nombre")

// const capitalizarNombre = (nombre) => {
//   const primeraLetra = nombre.charAt(0)
//   const restoDelNombre = nombre.slice(1)
//   const primeraEnMayuscula = primeraLetra.toUpperCase()
//   const restoEnMinuscula = restoDelNombre.toLowerCase()
//   const nombreCompleto = primeraEnMayuscula + restoEnMinuscula
  
//   return nombreCompleto
// }

// console.log(capitalizarNombre(nombreUsuario))


// Las funciones nativas se pueden concatenar 

// const nombre = "Agustina"
// const primeraLetraMinuscula = nombre.charAt(0).toLowerCase()
// console.log(primeraLetraMinuscula) // a


// const nombreUsuario = prompt("Decime tu nombre")

// const capitalizarNombre = (nombre) => {
//   const primeraLetra = nombre.charAt(0).toUpperCase()
//   const restoDelNombre = nombre.slice(1).toLowerCase()
//   const nombreCompleto = primeraLetra + restoDelNombre
  
//   return nombreCompleto
// }

// console.log(capitalizarNombre(nombreUsuario))



// replace 
// Recibe dos parametros
// El primero es el valor a reemplazar
// El segundo es el valor por el cual se debe reemplazar
// Solo reemplaza la primera aparicion del valor 

// const frase = "Aguante river plate"
// const otraFrase = "Griselda es fanatica de Indio Solari"

// console.log(frase.replace("v", "B"))
// console.log(otraFrase.replace("Indio Solari", "Ricardo Montaner"))
// const fraseConPalabraRepetida = "Malena tiene tres gatos. A malena le encantan los gatos"
// console.log( fraseConPalabraRepetida.replace("gatos", "perros") )


// expresiones regulares o REGEX 

// /patron/gi
// const frase = "River es el mejor Rikkkkkkker Rimer Riler Rioer equipo de argentina. Aguante Riber Plate"
// const fraseConA = frase.replace(/ri[a-z]er/gi, "BOQUITA")
// console.log(fraseConA)


// /patron/modificadores

// /palabra/g --> buscar literalmente "palabra" en todas sus apariciones
// /e/i --> buscar literalmente "e" en mayuscula o minuscula
// /[ae]/gi --> buscar toda aparicion de la letra a o de la letra e en mayuscula o minuscula


// Escribir una funcion que encuentre malas palabras en un juego infantil
// y las reemplace por ***** 

// const frase = "La puta madre Mariano, que ojete de mierda tenes"

// frase.replace("puta", "*****")
// frase.replace("ojete", "*****")
// frase.replace("mierda", "*****")

// frase.replace(/puta|ojete|mierda/, "*****") 

// match 
// busca un string o expresion regular y retorna una lista 
// const frase = "Esta frase tiene una mAlA palabra"
// console.log(frase.match(/mala palabra/ig))

// includes 
// no recibe expresiones regulares 
// permite buscar, retorna un booleano 

// const frase = "es lo mismo poner gi que ig"
// console.log(frase.includes("gi"))


// indexOf 
// Retorna la posicion del caracter que paso como parametro
// Si no lo encuentra, retorna -1 
// const nombre = "Diamela"
// console.log(nombre.indexOf("b")) // -1






// FUNCIONES NATIVAS O METODOS PARA NUMEROS

// const decimal = "error fatal"

// console.log(decimal)

// console.log(Math.round(decimal))
// console.log(Math.ceil(decimal))
// console.log(Math.floor(decimal))


// isNaN 

// console.log(isNaN(NaN))
// console.log(isNaN(33))


// const celularDelUsuario = "No tengo celular"

// const celularEnNumero = Number(celularDelUsuario)

// if (isNaN(celularEnNumero)) {
//   // no le mando nada a la base de datos
// }
// else {
//   // se lo puedo mandar a mi base datos 
// }
