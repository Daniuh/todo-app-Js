/**
 * 
 * @param {string} elementId 
 */

import  html  from './app.html?raw';
import todoStore from '../store/todo-store';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList:       '.todo-list',
    NewTodoInputs:  '#new-todo-input',
    ClearCompleted: '.clear-completed',
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
        
    }

    //Cuando la función app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias html
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoInputs);
    const todoListUL          = document.querySelector(elementIDs.TodoList);
    const clearCompleted      = document.querySelector(elementIDs.ClearCompleted);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const istoggle = event.target.className === 'toggle';
        const element = event.target.closest('[data-id]');

        if( !element || !istoggle) return;

        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        const isDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        
        if( !element || !isDestroy) return;
        
        todoStore.deletedTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompleted.addEventListener('click', () => {
        todoStore.deletedCompleted();
        displayTodos();
    })
}