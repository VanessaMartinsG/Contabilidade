export function errorAlert(msg) {

    const Swal = require('sweetalert2');

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg
    });
}

errorAlert("CPF não cadastrado!");

