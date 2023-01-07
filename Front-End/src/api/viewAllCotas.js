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
  };

  document.addEventListener("DOMContentLoaded", () => {
    return buscaPorTodos();
  });

