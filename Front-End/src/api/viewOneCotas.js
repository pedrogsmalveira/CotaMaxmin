const buttonBuscar = document.getElementById("buscar");
const selection = document.getElementById("opcoesBusca");
const deleteCota = document.getElementById("delete");
const editCota = document.getElementById("edit");

let infosToEdit = null
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

      infosToEdit = response
      id = response[0]._id
    })
    .catch((err) => {
      swal({
        icon: "error",
        text: "Essa cota não existe ou foi deletada anteriormente.\n\n Certifique-se de ter digitado corretamente o nome.",
        button: "OK",
      });
      console.error(err)
    })
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
      
      infosToEdit = response
      id = response[0]._id

    })
    .catch(() => {
      swal({
        icon: "error",
        text: "Essa cota não existe ou foi deletada anteriormente.\n\n Certifique-se de ter digitado corretamente o número.",
        button: "OK",
      });
    });
};

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

      infosToEdit = response
      id = response[0]._id
    })
    .catch(() => {
      swal({
        icon: "error",
        text: "Essa cota não existe ou foi deletada anteriormente.\n\n Certifique-se de ter digitado corretamente o CPF. \n O CPF deve ser digitado sem pontos e sem hífem.",
        button: "OK",
      });
  });
};

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
          if (id === null) {
            swal({
              icon: "error",
              text: "Nenhuma cota foi selecionada.",
              button: "OK",
            });
          } else {  
            swal({
              icon: "success",
              text: "A cota foi deletada com sucesso!",
              button: "OK",
            });
          };
      });
    };
  });
});

editCota.addEventListener("click", () => {
  localStorage.setItem("cota", JSON.stringify(infosToEdit));
    
  infosToEdit === null ? (
      swal({
        icon:"error",
        text: "Nenhuma cota selecionada."
      })
  ) : window.location.replace("../html/editCotas.html");
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
