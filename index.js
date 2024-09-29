/*
Переделать ToDo-list с использованием Jquery
За допомогою Bootstrap створити модальне вікно до TODO list, яке по кліку на завдання буде показувати вікно з його текстом. Наприклад:
*/

const taskList = $('.task-list');
const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
const taskTextElement = $('#taskText');

taskList.on('click', '.delete-button', function() {
    const listItem = $(this).closest('.task-item');
    if (listItem.length) {
        listItem.remove();
    }
});

taskList.on('click', '.mg', function() {
    const taskText = $(this).text();
    taskTextElement.text(taskText);
    taskModal.show();
});

const input = $('.add-new-task');
const addButton = $('.add-task-button');

addButton.click(() => {
    if (!input.val().trim()) {
        input.val('');
        return;
    }

    let newTask = $('<li></li>').addClass('task-item');

    let spanTask = $('<span></span>').addClass('mg').text(input.val().trim());

    newTask.append(spanTask);

    let deleteButton = $('<button></button>')
        .addClass('delete-button')
        .text('Видалити');

    newTask.append(deleteButton);

    $('.task-list').append(newTask);

    input.val('');
});