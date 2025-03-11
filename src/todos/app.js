/**
 * 
 * @param {string} elementId 
 */

import  html  from './app.html?raw';
import todoStore, { Filters } from '../store/todo-store';
import { renderPendingTodos, renderTodos } from './use-cases';

const elementIDs = {
    TodoList:       '.todo-list',
    NewTodoInputs:  '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilter:     '.filtro',
    PendingCount:   '#pending-count',
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
        pendingCount();
    }

    const pendingCount = () => {
        renderPendingTodos(elementIDs.PendingCount);
    }

    //Cuando la función app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
        pendingCount();
    })();

    //Referencias html
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoInputs);
    const todoListUL          = document.querySelector(elementIDs.TodoList);
    const clearCompleted      = document.querySelector(elementIDs.ClearCompleted);
    const filtersLI           = document.querySelectorAll(elementIDs.TodoFilter);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        pendingCount();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const istoggle = event.target.className === 'toggle';
        const element = event.target.closest('[data-id]');

        if( !element || !istoggle) return;

        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
        pendingCount();
    });

    todoListUL.addEventListener('click', (event) => {
        const isDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        
        if( !element || !isDestroy) return;
        
        todoStore.deletedTodo(element.getAttribute('data-id'));
        displayTodos();
        pendingCount();
    });

    clearCompleted.addEventListener('click', () => {
        todoStore.deletedCompleted();
        displayTodos();
        pendingCount();
    });

    filtersLI.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLI.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();
            pendingCount();
        });
    });
}