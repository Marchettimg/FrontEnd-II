let objetoOpciones = {
    'piedra' : {
      'piedra' : 'empate',
      'tijera' : 'gana',
      'papel' : 'pierde'
    },
    'tijera' : {
      'piedra' : 'pierde',
      'tijera' : 'empate',
      'papel' : 'gana'
    },
    'papel' : {
      'piedra' : 'gana',
      'tijera' : 'pierde',
      'papel' : 'empate'
    }
  }

  let bienvenida = alert("Te damos la bienvenida")
  let jugar = confirm("¿Querés iniciar la partida?")

  //Opcion usuario
  let opcionUsuario = prompt("Ingrese su opción (piedra, papel, tijera): ")
  console.log(opcionUsuario)
  
 
  // Opcion compu
  let opciones = ["piedra", "papel", "tijera"]
  let numero = Math.round(Math.random() * (3-1)+1)
  alert("Ahora es el turno de la maquina")
  let opcionCompu = opciones[numero]
  alert(`La opción elegida por la maquina es: ${opcionCompu}`)
  console.log(opcionCompu)
  let resultado

  //Eleccion
  if(objetoOpciones[opcionUsuario][opcionCompu] == "gana") {    //Tmb puedo escribirlo como objetoOpciones.opcionUsuario.OpcionCompu
         resultado = "Felicitaciones! Tu ganas"
  } else if (objetoOpciones[opcionUsuario][opcionCompu] == "pierde"){
         resultado = "Lo siento! Tu pierdes"
  } else {
        resultado = "Es un empate"
  }

  alert(resultado)
  console.log(resultado) 

  confirm("¿Quieres jugar otra partida?")



    


