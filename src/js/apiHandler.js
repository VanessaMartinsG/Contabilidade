import { errorAlert } from "./sweetAlert.js"

const ContabilidadeAPIUrl = "https://money-control-backend.herokuapp.com";

export async function postAccount(user) {
    const response = await fetch(`${ContabilidadeAPIUrl}/account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.status == 400) {
        errorAlert("Usuário já cadastrado !");
    }
    return response.status;

}

export async function getAccount(user) {
    const response = await fetch(`${ContabilidadeAPIUrl}/account`, {
        method: "GET",
        headers: { "cpf": user.cpf },
    });

    const data = await response.json();
    if (response.status == 400) {
        errorAlert("Usuário não Existe");
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
        errorAlert("Usuário não existe !");
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
    if (response.status == 400) {
        errorAlert("Operação resulta em saldo negativo !");
        return null;
    }
    return response.status;
}

export async function getTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "GET",
        headers: { "cpf": user.cpf },
    });
    const data = await response.json();
    if (response.status == 400) {
        errorAlert("Registro não existe !");
        return null;
    }
    return data;
}

export async function putTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "cpf": user.cpf },
        body: JSON.stringify(task)
    });

    if (response.status == 400) {
        errorAlert("Registro não existe !");
        return null;
    }

    return response.status;
}

export async function deleteTask(user, task) {
    const response = await fetch(`${ContabilidadeAPIUrl}/task/${task.id}`, {
        method: "DELETE",
        headers: { "cpf": user.cpf },
    });

    if (response.status == 400) {
        errorAlert("Usuário não existe !");
        return null;
    }
    return response.status;
}