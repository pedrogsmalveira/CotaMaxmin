const buttonBuscar = document.getElementById("buscar");
const selection = document.getElementById("opcoesBusca");
const deleteCota = document.getElementById("delete")
let id = null

function buscaPorNome() {
  const valueinputcota = document.getElementById("numeroCota").value;

  fetch("http://localhost:5501/cotas/nome", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      donodacota: valueinputcota.toUpperCase(),
    }),
  })
    .then(async (response) => {
      return await response.json();
    })
    .then((response) => {
      numeroDacota.textContent = `O número da cota é: ${response[0].numerodacota}`;
      donoDacota.textContent = `O dono da Cota é: ${response[0].donodacota}`;
      depenDentes.textContent = `Os dependentes são: ${response[0].dependentes}`;
      emaIl.textContent = `O email do dono é:  ${response[0].email}`;
      cPf.textContent = `O cpf do dono é: ${response[0].cpf}`;

      id = response[0]._id
    });
}

function buscaPorNumero() {
  const valueinputcota = document.getElementById("numeroCota").value;
  fetch("http://localhost:5501/cotas/numero", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      numerodacota: Number(valueinputcota),
    }),
  })
    .then(async (response) => {
      return await response.json();
    })
    .then((response) => {
      numeroDacota.textContent = `O número da cota é: ${response[0].numerodacota}`;
      donoDacota.textContent = `O dono da Cota é: ${response[0].donodacota}`;
      depenDentes.textContent = `Os dependentes são: ${response[0].dependentes}`;
      emaIl.textContent = `O email do dono é:  ${response[0].email}`;
      cPf.textContent = `O cpf do dono é: ${response[0].cpf}`;
      id = response[0]._id

    });
}

function buscaPorCpf() {
  const valueinputcota = document.getElementById("numeroCota").value;
  fetch("http://localhost:5501/cotas/cpf", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cpf: valueinputcota,
    }),
  })
    .then(async (response) => {
      return await response.json();
    })
    .then((response) => {
      numeroDacota.textContent = `O número da cota é: ${response[0].numerodacota}`;
      donoDacota.textContent = `O dono da Cota é: ${response[0].donodacota}`;
      depenDentes.textContent = `Os dependentes são: ${response[0].dependentes}`;
      emaIl.textContent = `O email do dono é:  ${response[0].email}`;
      cPf.textContent = `O cpf do dono é: ${response[0].cpf}`;

      id = response[0]._id
    });
}

deleteCota.addEventListener("click", () => {
  swal({
    icon: "warning",
    text: "Deseja realmente cancelar a cota selecionada?",
    buttons: [true, "Deletar"],
  }).then((result) => {

    if (result) {
      fetch(`http://localhost:5501/cotas/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then(async (responseJson) => {
          return await responseJson.json();
        })
        .then(() => {
          if(id === null) {
            swal({
              icon: "error",
              text: "Nenhuma cota foi selecionada.",
              button:"OK",
            })
          } else {
            swal({
              icon: "success",
              text: "A cota foi deletada com sucesso!",
              button:"OK",
            })
          }
          
        });
    };

  });

});


buttonBuscar.addEventListener("click", async (e) => {
  e.preventDefault();
  const selectionValue = selection.options[selection.selectedIndex].value;

  if (selectionValue == "Nome:") {
    return buscaPorNome();
  }
  if (selectionValue === "Numero Cota:") {
    return buscaPorNumero();
  } else if (selectionValue === "Cpf:") {
    return buscaPorCpf();
  }
});
