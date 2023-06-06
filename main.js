//validación con array e includes
// let button = document.querySelector("#btn_valida")
// let array=[]

// button.addEventListener("click", e =>{
//     let input = document.querySelector(".input").value;
//     e.preventDefault();
//     array.push(input)
//     array = input.split('')
//     console.log(array)
//         if(array.includes("@")){
//             alert("Email validado correctamente")
//         }else{
//             alert("El Email debe de tener el caracter @")
//         }
// })

//validación con función
// function encuentraMiPerro(datos) {
//     if(datos.includes("@")){
//         alert("bien");
//     }else{
//         alert("mal");
//     }
// }

// let button = document.querySelector("#btn_valida");
// button.addEventListener("click", e =>{
//     e.preventDefault();
//     let input = document.querySelector(".input").value;
//     encuentraMiPerro(input)
// })

//abrir ventanas en nuevas pestañas
// modalError: function modalError(){
//     window.open('/modalError.html', '_blank');
//    document.getElementById("modalError").click();
//  },

// validación de datos con uso de función, objetos y regex
function validarDatos2(input) {
  const errores = {
    email: "El email es inválido",
    vacio: "El campo no puede estar vacío",
    error: function error() {
      input.style.borderColor = "red";
    },
    correct: function correct() {
      input.style.borderColor = "#14f708";
    },
  };

  let nombre = document.querySelector("#input2").value;
  let erroresEncontrados = [];

  //validación campo vacío nombre y validez campo email
  let regex = /^\s*$/;
  if (!nombre) {
    input.style.borderColor = "red";
    erroresEncontrados.push(errores.vacio);
    console.log("nombre y email vacios");
  } else {
    input.style.borderColor = "#14f708";
  }
  if (email == /^\s*$/) {
    erroresEncontrados.push(errores.vacio);
    erroresEncontrados.push(errores.email);

    abrirmodal();
    document.querySelector("#tituloModal").innerHTML = "Campo email Vacido";
  }
  if (email && !nombre) {
    abrirmodal();
  }

  // Validar email
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    erroresEncontrados.push(errores.email);
    errores.error();
    abrirmodal();
    document.querySelector("#tituloModal").innerHTML =
      "Campo Email Vacido o Incorrecto";
  } else {
    errores.correct();
  }

  //   regex para validar vacío /^\s*$/
  if (erroresEncontrados.length > 0) {
    console.log("Se encontraron los siguientes errores:");
    for (let i = 0; i < erroresEncontrados.length; i++) {
      console.log("- " + erroresEncontrados[i]);
      console.log(erroresEncontrados);
      document.querySelector("#mensajes").innerHTML = `${erroresEncontrados}`;
    }
  } else {
    abrirmodal();
    console.log("Los datos son válidos. ¡Registro exitoso!");
    document.querySelector(
      "#mensajes"
    ).innerHTML = `Los datos son válidos. ¡Registro exitoso!`;
    document.querySelector("#tituloModal").innerHTML = "Felicitaciones";
  }
  return erroresEncontrados;
}

function validarDatos() {
  const errores = {
    email: "El email es inválido",
    vacio: "El campo no puede estar vacío",
    error: function error() {
      input.style.borderColor = "red";
    },
    correct: function correct() {
      input.style.borderColor = "#14f708";
    },
  };

  let email = document.querySelector("#input").value;
  let nombre = document.querySelector("#input2").value;
  let erroresEncontrados = [];

  //validación campo vacío nombre y validez campo email
  let regex = /^\s*$/;

  if (!nombre) {
    erroresEncontrados.push(errores.vacio);

    console.log("nombre y email vacios");
  } else {
  }
  if (email == /^\s*$/) {
    erroresEncontrados.push(errores.vacio);
    erroresEncontrados.push(errores.email);

    abrirmodal();
    document.querySelector("#tituloModal").innerHTML = "Campo email Vacido";
  }
  if (email && !nombre) {
    abrirmodal();
  }

  // Validar email
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    erroresEncontrados.push(errores.email);
    errores.error();
    abrirmodal();
    document.querySelector("#tituloModal").innerHTML =
      "Campo Email Vacido o Incorrecto";
  } else {
    errores.correct();
  }

  //   regex para validar vacío /^\s*$/
  if (erroresEncontrados.length > 0) {
    console.log("Se encontraron los siguientes errores:");
    for (let i = 0; i < erroresEncontrados.length; i++) {
      console.log("- " + erroresEncontrados[i]);
      console.log(erroresEncontrados);
      document.querySelector("#mensajes").innerHTML = `${erroresEncontrados}`;
    }
  } else {
    abrirmodal();
    console.log("Los datos son válidos. ¡Registro exitoso!");
    document.querySelector(
      "#mensajes"
    ).innerHTML = `Los datos son válidos. ¡Registro exitoso!`;
    document.querySelector("#tituloModal").innerHTML = "Felicitaciones";
  }
  return erroresEncontrados;
}

let button = document.querySelector("#btn_valida");
button.addEventListener("click", (e) => {
  e.preventDefault();
  validarDatos();
  validarDatos2(input2);
});

let btnCerrarModal = document.querySelector("#btn-cerrar-modal");
btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

let abrirmodal = function abrirModal() {
  let modal = document.querySelector("#modal");
  modal.show();
  setTimeout(function () {
    modal.close();
  }, 3000);
};
