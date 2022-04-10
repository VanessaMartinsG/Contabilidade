import { errorAlert } from "./sweetAlert.js"

const ContabilidadeAPIUrl = "https://money-control-backend.herokuapp.com";

export async function postAccount(user) {
    const response = await fetch(`${ContabilidadeAPIUrl}/account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    console.log(response);

    if (response.status == 400) {
        errorAlert("CPF já Cadastrado !");
    }
    return response.status;

}

export async function getAccount(user) {
    const response = await fetch(`${ContabilidadeAPIUrl}/account`, {
        method: "GET",
        headers: { "cpf": user.cpf },
    });

    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;

}

export async function getStatement(user) {
    const response = await fetch(`${ContabilidadeAPIUrl}/statement`, {
        method: "GET",
        headers: { "cpf": user.cpf },
    });

    const data = await response.json();
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;

}

export async function postTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "cpf": user.cpf },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;
}

export async function getTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "GET",
        headers: { "cpf": user.cpf },
    });
    const data = await response.json();
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;
}

export async function putTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "PUT",
        headers: { "cpf": user.cpf },
    });
    const data = await response.json();
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;
}

export async function deleteTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "DELETE",
        headers: { "cpf": user.cpf },
    });
    const data = await response.json();
    if (response.status == 400) {
        errorAlert(data.error);
        return null;
    }
    return data;
}