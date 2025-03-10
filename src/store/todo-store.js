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
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
    console.log('Init Store');
    
}

const loadStore = () => {
    if (!localStorage.getItem('state'))return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos  = todos;
    state.filter = filter;
}

const saveLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
    
        default:
            throw new Error(`Opción ${filter} no es valida.`);
    }
}

/**
 * 
 * @param {string} todo  recibe y crea un nuevo todo
 */

const addTodo = (description) => {
    if (!description) throw new Error('La descripción es necesaria');
    state.todos.push(new Todo(description));

    saveLocalStorage();
}

/**
 * 
 * @param {string} todoId Recibe el id del todo para determinar si está completada o no. 
 */

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo =>{
        if(todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });

    saveLocalStorage();
}

/**
 * 
 * @param {string} todoId Recibe el id de la tarea que deseamos borrar y lo elimina
 */

const deletedTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveLocalStorage();
}

const deletedCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);

    saveLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;

}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deletedTodo,
    deletedCompleted,
    setFilter,
    getCurrentFilter,   
}