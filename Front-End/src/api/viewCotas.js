const buttonBuscar = document.getElementById("buscar");
const selection = document.getElementById("opcoesBusca");
const resultCota = document.getElementById("container_cota");

function buscaPorTodos() {
  fetch("http://localhost:5501/cotas", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (response) => {
      return await response.json();
    })
    .then((response) => {
      let html = `
       <table>
         <tr>
           <th>Id da Cota</th>
           <th>Dono Da Cota</th>
           <th>Dependentes</th>
           <th>Email</th>
           <th>Cpf do Dono</th>
         </tr>`;
      for (const cota of response) {
        html += `
         <tr>
           <td>${cota.numerodacota}</td>
           <td>${cota.donodacota}</td>
           <td>${cota.dependentes}</td>
           <td>${cota.email}</td>
           <td>${cota.cpf}</td>
         </tr>`;
      }
      html += `</table>`;
      resultCota.innerHTML = html;
    });
}

function buscaPorNome() {
  const valueinputcota = document.getElementById("numeroCota").value;
  fetch("http://localhost:5501/cotas/nome", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      donodacota: valueinputcota,
    }),
  })
    .then(async (response) => {
      return await response.json();
    })
    .then((response) => {
      console.log(response);
      numeroDacota.textContent = `O número da cota é: ${response[0].numerodacota}`;
      donoDacota.textContent = `O dono da Cota é: ${response[0].donodacota}`;
      depenDentes.textContent = `Os dependentes são: ${response[0].dependentes}`;
      emaIl.textContent = `O email do dono é:  ${response[0].email}`;
      cPf.textContent = `O cpf do dono é: ${response[0].cpf}`;
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
    });
}

document.addEventListener("DOMContentLoaded", () => {
  return buscaPorTodos();
});

buttonBuscar.addEventListener("click", async (e) => {
  e.preventDefault();
  const valueinputcota = document.getElementById("numeroCota").value;
  const selectionValue = selection.options[selection.selectedIndex].value;

  if (valueinputcota === "") {
    buscaPorTodos();
  }
  if (selectionValue == "Nome:") {
    return buscaPorNome();
  }
  if (selectionValue === "Numero Cota:") {
    return buscaPorNumero();
  } else if (selectionValue === "Cpf:") {
    return buscaPorCpf();
  }
});
