import { Todo } from '../todos/models/todo-model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del alma'),
        new Todo('Piedra del poder'),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('Init Store');
    
}

const loadStore = () => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {string} todo  recibe y crea un nuevo todo
 */

const addTodo = (description) => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {string} todoId Recibe el id del todo para determinar si está completada o no. 
 */

const toggleTodo = (todoId) => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {string} todoId Recibe el id de la tarea que deseamos borrar y lo elimina
 */

const deletedTodo = (todoId) => {
    throw new Error('No implementado');
}

const deletedCompleted = (todoId) => {
    throw new Error('No implementado');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('No implementado');
}

const getCurrentFilter = () => {
    throw new Error('No implementado');
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deletedTodo,
    deletedCompleted,
    setFilter,
    getCurrentFilter,   
}