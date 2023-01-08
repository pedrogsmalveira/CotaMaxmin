const cota = localStorage.getItem("cota");
const cotaJson = JSON.parse(cota)[0];

const numeroDaCota = document.getElementById("numeroDacota")
const donoDacota = document.getElementById("dono-da-cota");
const dependentes = document.getElementById("dependentes");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");

document.addEventListener("DOMContentLoaded", () => {

    numeroDaCota.innerHTML = cotaJson.numerodacota
    donoDacota.value = cotaJson.donodacota;
    dependentes.value = cotaJson.dependentes;
    cpf.value = cotaJson.cpf;
    email.value = cotaJson.email; 
});

numeroDaCota.addEventListener("click", () => {
    swal({
        icon: "warning",
        text: "O numero da cota não pode ser alterado"
    });
});


function edit() {
    event.preventDefault()
    fetch(`http://localhost:5501/cotas/update/${cotaJson._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            id: cotaJson._id,
            donodacota: donoDacota.value,
            dependentes: dependentes.value,
            cpf: cpf.value,
            email: email.value
        })
    })
    .then(async (response) => {
        return await response.json();
    })
    .then(response => {
        console.log(response)
        if(response.message === "Atualizado") {
            swal({
                icon: "success",
                text: "Cota atualizada com sucesso!!!"
            });
        } if(response.message === "CPF repetido") {
            swal({
                icon: "error",
                text: "Este CPF pertence ao dono de outra cota"
            });
        } if(response.message === "CPF invalido") {
            swal({
                icon: "error",
                text: "O CPF digitado é invalido, pois possui numeros a mais ou a menos.."
            });
        };
    });
};