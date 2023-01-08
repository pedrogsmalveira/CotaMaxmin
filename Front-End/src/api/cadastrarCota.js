async function cadastrar() {
    const donoDacota = document.getElementById("dono-da-cota");
    const dependentes = document.getElementById("dependentes");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    event.preventDefault();
    fetch("http://localhost:5501/cotas", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            donodacota: donoDacota.value,
            dependentes: dependentes.value,
            cpf: cpf.value,
            email: email.value
        }),
    })
        .then(async (response) => {
            return await response.json();
        })
        .then((response) => {
            if(response.message == 'CPF repetido') {
                return swal({
                    text: "CPF já cadastrado anteriormente.",
                    icon: "error",
                });
            } if(response.message === "CPF invalido") {
                return swal({
                    text: "O CPF digitado é invalido, pois possui numeros a mais ou a menos.",
                    icon: "error",
                });
            } else {
                return swal({
                    text: "Cota cadastrada com sucesso",
                    icon: "success",
                });
            }
        });
};




