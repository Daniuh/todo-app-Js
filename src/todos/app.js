/**
 * 
 * @param {string} elementId 
 */

import todoStore from '../store/todo-store';
import  html  from './app.html?raw';

const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    console.log(todos);
    
}

export const App = (elementId) => {

    //Cuando la función app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}