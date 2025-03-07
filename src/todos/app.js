/**
 * 
 * @param {string} elementId 
 */

import  html  from './app.html?raw';
import todoStore from '../store/todo-store';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList:      '.todo-list',
    NewTodoInputs: '#new-todo-input',
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

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

}