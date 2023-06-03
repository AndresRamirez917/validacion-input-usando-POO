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
      // modalError: function modalError(){
        //  window.open('/modalError.html', '_blank');
        // document.getElementById("modalError").click();
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "El email debe de ser válido, y el campo no debe de estar vacío",
        //   showConfirmButton: false,
        //   timer: 4000,
        // });
      // },
      modalExito: function modalExito(){
        // window.open('/modalExito.html', '_blank');
        // window.location.href = ('/modalExito.html', '_blank');
        // document.getElementById("modalExito").click();
        Swal.fire({
          icon: "success",
          title: "Correo válido",
          text: "Validación de email confirmada",
          showConfirmButton: false,
          timer: 4000,
        }); 
     },
  

 
    };

    
    // let parrafo = document.querySelector("#mensajes");
    let email = document.querySelector(".input").value;
    // let botonModal = document.getElementById("btn-modal").checked=true
    // botonModal.checked == true;
    let erroresEncontrados = [];

    //validar campo vacío
    let regex = /^\s*$/
 
    if (!email==="") {
      erroresEncontrados.push(errores.vacio);
      errores.error()
      // errores.modalError()
      abrirmodal()
    }

    // Validar email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      erroresEncontrados.push(errores.email);
      errores.error()
      // errores.modalError()
      abrirmodal()
    }

    if (erroresEncontrados.length > 0) {
      console.log("Se encontraron los siguientes errores:");
      for (let i = 0; i < erroresEncontrados.length; i++) {
        console.log("- " + erroresEncontrados[i]);
        console.log(erroresEncontrados)
        document.querySelector("#mensajes").innerHTML=`${erroresEncontrados}`
      }
    } else {
      errores.correct()
      // errores.modalExito()
      abrirmodal()
      console.log("Los datos son válidos. ¡Registro exitoso!");
      document.querySelector("#mensajes").innerHTML=`Los datos son válidos. ¡Registro exitoso!`
      
    }
    return erroresEncontrados;
  }

  let button = document.querySelector("#btn_valida");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    validarDatos();
  });
    
  
    let btnCerrarModal = document.querySelector("#btn-cerrar-modal");
    btnCerrarModal.addEventListener("click", ()=>{
     modal.close()  
    })

 
    
   
    let abrirmodal= function abrirModal(){
      let modal = document.querySelector("#modal");
      modal.showModal()
      setTimeout(function(){
        modal.close()
      }, 3000)
     }
     



  
  

