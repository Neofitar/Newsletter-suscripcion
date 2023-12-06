const btnCerrarVentana = document.querySelector("#cerrar-ventana");

const suscribirVentana = document.querySelector("#suscripcion");

const formulario = document.querySelector("#formulario-sus")

// Crear evento

btnCerrarVentana.addEventListener("click", () => {
    suscribirVentana.close();
})


formulario.addEventListener("submit", validarFormulario)

//Funciones

function validarFormulario(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    if (email.length == 0){
    }else{
        let confirmacion=document.getElementById("confirmacion-email");
        confirmacion.textContent = `${email}.`
        suscribirVentana.show();
    }
}