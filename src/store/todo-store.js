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

export default {
    initStore,
}