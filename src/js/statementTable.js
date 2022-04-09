

function showStatements(statements) {
    const table = document.querySelector(".table__content");
    table.innerHTML = "";
    statements.forEach(statement => {
        const row = document.createElement("div");
        row.classList.add("row");

        const title = document.createElement("p");
        title.classList.add("reg__title");
        title.textContent = statement.title;

        const price = document.createElement("p");
        price.classList.add(statement.type);
        price.textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(statement.amount);

        const category = document.createElement("p");
        category.classList.add("reg__cat");
        category.textContent = statement.category;

        const date = document.createElement("p");
        date.classList.add("reg__date");
        date.textContent = new Date(statement.created_at).toLocaleDateString("pt-BR");

        const editIcon = document.createElement("span");
        editIcon.innerHTML = `<svg class='reg__edit' id=${statement.id} xmlns='http://www.w3.org/2000/svg'><path d='M0 21.3787V27.0037H5.625L22.215 10.4137L16.59 4.78875L0 21.3787ZM26.565 6.06375C27.15 5.47875 27.15 4.53375 26.565 3.94875L23.055 0.43875C22.47 -0.14625 21.525 -0.14625 20.94 0.43875L18.195 3.18375L23.82 8.80875L26.565 6.06375Z' /></svg>`

        const deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = `<svg class='reg__del' id=${statement.id} xmlns='http://www.w3.org/2000/svg'><path d='M1.92857 24C1.92857 25.65 3.66429 27 5.78571 27H21.2143C23.3357 27 25.0714 25.65 25.0714 24V6H1.92857V24ZM27 1.5H20.25L18.3214 0H8.67857L6.75 1.5H0V4.5H27V1.5Z'/></svg>`;

        row.appendChild(title);
        row.appendChild(price);
        row.appendChild(category);
        row.appendChild(date);
        row.appendChild(editIcon);
        row.appendChild(deleteIcon);
        table.appendChild(row);
    });

}

async function getStatements(usr_cpf) {
    const url = "https://money-control-backend.herokuapp.com";
    const response = await fetch(`${url}/statement`, {
        headers: { "cpf": usr_cpf }
    });

    let user_statements = await response.json();
    showStatements(user_statements);
}
