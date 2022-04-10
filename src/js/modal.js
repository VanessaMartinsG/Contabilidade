
import { getTask, postTask, putTask } from './apiHandler.js';
import { updateStatements } from './statementTable.js';
import { resetTaskFormMode } from './dashboard.js'

export async function populateTaskModal(user, task) {
    const task_form = document.forms.task__form;
    const { title, price, transaction, category } = task_form;

    const response = await getTask(user, task);


    if (response) {
        title.value = response.title;
        price.value = response.amount;
        transaction.value = response.type;
        category.value = response.category;
        task_form.setAttribute("id", response.id);
    }


}

(() => {
    const task_form = document.forms.task__form;

    function priceFormatter() {
        const { price } = task_form;
        price.addEventListener('keypress', (e) => {
            let priceLength = price.value.length;

            if (isNaN(price.value[priceLength - 1]) && price.value[priceLength - 1] != "." && price.value[priceLength - 1] != ",") {
                price.value = price.value.substring(0, priceLength - 1);
                return false;
            }
        });
    }

    function submitTaskForm() {
        const { title, price, transaction, category } = task_form;
        let user = JSON.parse(window.localStorage.getItem('user'));
        task_form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const task = {
                title: title.value,
                amount: parseFloat(price.value.replaceAll(",", ".")),
                category: category.value,
                type: transaction.value
            };
            let response = null;
            if (task_form.classList.contains("form__registerMode")) {
                response = await postTask(user, task);
            } else if (task_form.classList.contains("form__editMode")) {
                task.id = task_form.getAttribute("id");
                response = await putTask(user, task);
            }

            if (response == 201 || response == 200) {
                updateStatements();
                task_form.reset();
                resetTaskFormMode();
            }
        });

    }

    function init() {
        priceFormatter();
        submitTaskForm();
    }

    if (document.body.classList.contains("dashboardScreen")) {
        if (window.localStorage.getItem('user')) {
            init();
        } else {
            window.location.href = loginWindow;
        }
    }
})();