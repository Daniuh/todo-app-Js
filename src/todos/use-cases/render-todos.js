import { Todo } from '../models/todo-model';
import { createTodoHtml } from './';

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);

    todos.forEach(todo => {
        element.append(createTodoHtml(todo));
    });
}