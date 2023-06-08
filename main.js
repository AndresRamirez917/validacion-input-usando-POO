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
// function validarDatos2(input) {
//   const errores = {
//     email: "El email es inválido",
//     vacio: "El campo no puede estar vacío",
//     error: function error() {
//       input.style.borderColor = "red";
//     },
//     correct: function correct() {
//       input.style.borderColor = "#14f708";
//     },
//   };

//   let nombre = document.querySelector("#input2").value;
//   let erroresEncontrados = [];

  //validación campo vacío nombre y validez campo email
  // let regex = /^\s*$/;
  // if (!nombre) {
  //   errores.error()
  // } else {
  //   errores.correct()
  // }

  // Validar email
  // const emailRegex = /^\S+@\S+\.\S+$/;
  // if (!emailRegex.test(email)) {
  //   erroresEncontrados.push(errores.email);
  //   errores.error();
  //   abrirmodal();
  //   document.querySelector("#tituloModal").innerHTML =
  //     "Campo Email Vacido o Incorrecto";
  // } else {
  //   errores.correct();
  // }

  //   regex para validar vacío /^\s*$/
//   if (erroresEncontrados.length > 0) {
//     console.log("Se encontraron los siguientes errores:");
//     for (let i = 0; i < erroresEncontrados.length; i++) {
//       console.log("- " + erroresEncontrados[i]);
//       console.log(erroresEncontrados);
//       document.querySelector("#mensajes").innerHTML = `${erroresEncontrados}`;
//     }
//   } else {
//     abrirmodal();
//     console.log("Los datos son válidos. ¡Registro exitoso!");
//     document.querySelector(
//       "#mensajes"
//     ).innerHTML = `Los datos son válidos. ¡Registro exitoso!`;
//     document.querySelector("#tituloModal").innerHTML = "Felicitaciones";
//   }
//   return erroresEncontrados;
// }

// function validarDatos() {
//   const errores = {
//     email: "El email es inválido",
//     vacio: "El campo no puede estar vacío",
//     error: function error() {
//       input.style.borderColor = "red";
//     },
//     correct: function correct() {
//       input.style.borderColor = "#14f708";
//     },
//   };

//   let email = document.querySelector("#input").value;
//   let nombre = document.querySelector("#input2").value;
//   let erroresEncontrados = [];

  //validación campo vacío nombre y validez campo email
  // let regex = /^\s*$/;

  // if (!nombre) {
  //   erroresEncontrados.push(errores.vacio);

  //   console.log("nombre y email vacios");
  // }  
  
  // if (email) {
  //   abrirmodal();
  // }

  // Validar email
  // const emailRegex = /^\S+@\S+\.\S+$/;
  // if (!emailRegex.test(email)) {
  //   erroresEncontrados.push(errores.email);
  //   errores.error();
  //   abrirmodal();
  //   document.querySelector("#tituloModal").innerHTML =
  //     "Campo Email Vacido o Incorrecto";
  // } else {
  //   errores.correct();
  // }

  //   regex para validar vacío /^\s*$/
//   if (erroresEncontrados.length > 0) {
//     console.log("Se encontraron los siguientes errores:");
//     for (let i = 0; i < erroresEncontrados.length; i++) {
//       console.log("- " + erroresEncontrados[i]);
//       console.log(erroresEncontrados);
//       document.querySelector("#mensajes").innerHTML = `${erroresEncontrados}`;
//     }
//   } else {
//     abrirmodal();
//     console.log("Los datos son válidos. ¡Registro exitoso!");
//     document.querySelector(
//       "#mensajes"
//     ).innerHTML = `Los datos son válidos. ¡Registro exitoso!`;
//     document.querySelector("#tituloModal").innerHTML = "Felicitaciones";
//   }
//   return erroresEncontrados;
// }

// let button = document.querySelector("#btn_valida");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   validarDatos(input2);
//   validarDatos2(input2);
  
// });

// let btnCerrarModal = document.querySelector("#btn-cerrar-modal");
// btnCerrarModal.addEventListener("click", () => {
//   modal.close();
// });

// let abrirmodal = function abrirModal() {
//   let modal = document.querySelector("#modal");
//   modal.show();
//   setTimeout(function () {
//     modal.close();
//   }, 3000);
// };

let erroresEncontrados = [];
let datosCorectos = [];

//function validarDatos2(input) {
    const errores = {
      email: "El email es inválido",
      vacio: "El campo no puede estar vacío",
      // success:"El registro fue exitoso",
      error: function error() {
        input.style.borderColor = "red";
      },
      correct: function correct() {
        input.style.borderColor = "#14f708";
      },
    };
  //}

  const exito = {
    successEmail:"El email es válido",
    successName:"El nombre es válido"
  }

class Input {
  constructor(text){
    this.text=text
  }
}
  class Functions {
    emailValido(email){
      let inputEmail = document.getElementById("email");
      const emailRegex = /^\S+@\S+\.\S+$/;
      if(!emailRegex.test(email)){    
        erroresEncontrados.push(errores.email)
        console.log(erroresEncontrados)
        return false 
      }else{
        inputEmail.style.borderColor = "green";
        console.log("Email válido")
        // erroresEncontrados.push(exito.successEmail)
       
        return true
      }
    }
  
    nombreVacio(name){
      let inputNombre = document.getElementById("nombre");
      const nameRegex = /^\s*$/
      if(nameRegex.test(name)){
        erroresEncontrados.push(errores.vacio)
        console.log(erroresEncontrados)
      console.log("input vacío")
        return false
      }else{
        inputNombre.style.borderColor = "green";
        console.log("Campo válido")
        // erroresEncontrados.push(exito.successName)
        // console.log(datosCorectos)
        return true
      }
    }

    camposVacidos(email, name){
      email= document.querySelector("#email");
    name = document.querySelector("#nombre")
      if(!email=="" || !name==""){
        name.style.borderColor = "red"
        email.style.borderColor = "red";
      }
    }
  }

  

let btnValida = document.querySelector("#btn_valida");
btnValida.addEventListener("click", e =>{
  e.preventDefault()
 let inputEmail = document.querySelector("#email").value;
 let inputName = document.querySelector("#nombre").value;
 let inputEmailObject = new Functions()
  let inputNameObject = new Functions()
  if((inputEmailObject.camposVacidos(inputEmail) && inputNameObject.camposVacidos(inputName))){
  }else{
    inputEmailObject.emailValido(inputEmail)
    inputNameObject.nombreVacio(inputName)
   
     if(inputEmailObject.emailValido(inputEmail) && inputNameObject.nombreVacio(inputName)){
      document.querySelector("#mensajes").innerHTML ="Registro Exitoso"
     }else{
      document.querySelector("#mensajes").innerHTML = ""
      document.querySelector("#mensajes").innerHTML ="Alguno de los campos esta vacío o es incorrecto"
      erroresEncontrados=[]
     }
     datosCorectos=[]
    
    console.log(erroresEncontrados) 
    console.log(datosCorectos)
    abrirmodal()
  }
    
})

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



/**
 * if (erroresEncontrados.length > 0) {
//     console.log("Se encontraron los siguientes errores:");
//     for (let i = 0; i < erroresEncontrados.length; i++) {
//       console.log("- " + erroresEncontrados[i]);
//       console.log(erroresEncontrados);
//       document.querySelector("#mensajes").innerHTML = `${erroresEncontrados}`;
//     }
//   } else {
//     abrirmodal();
//     console.log("Los datos son válidos. ¡Registro exitoso!");
//     document.querySelector(
//       "#mensajes"
//     ).innerHTML = `Los datos son válidos. ¡Registro exitoso!`;
//     document.querySelector("#tituloModal").innerHTML = "Felicitaciones";
//   }
 */