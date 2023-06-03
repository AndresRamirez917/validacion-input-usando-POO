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

  
  // validación de datos con uso de función, objetos y regex 
  function validarDatos() {
    const errores = {
      email: "El email es inválido",
      vacio: "El campo no puede estar vacío",
      error: function error(){
        input.style.borderColor="red"
      },
      correct: function correct(){
        input.style.borderColor="#14f708"
      },
      modalError: function modalError(){
        //  window.open('/modalError.html', '_blank');
        document.getElementById("modalError").click();
      },
      modalExito: function modalExito(){
        // window.open('/modalExito.html', '_blank');
        // window.location.href = ('/modalExito.html', '_blank');
        document.getElementById("modalExito").click();
     },
    };

  
    let email = document.querySelector(".input").value;
    let erroresEncontrados = [];

    //validar campo vacío
    if (!email) {
      erroresEncontrados.push(errores.vacio);
      errores.error()
      errores.modalError()
    }

    // Validar email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      erroresEncontrados.push(errores.email);
      errores.error()
      errores.modalError()
    }

    if (erroresEncontrados.length > 0) {
      console.log("Se encontraron los siguientes errores:");
      for (let i = 0; i < erroresEncontrados.length; i++) {
        console.log("- " + erroresEncontrados[i]);
      }
    } else {
      errores.correct()
     errores.modalExito()
      console.log("Los datos son válidos. ¡Registro exitoso!");
      
    }
    return erroresEncontrados;
  }

  let button = document.querySelector("#btn_valida");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    validarDatos();
  });
    





  
  

