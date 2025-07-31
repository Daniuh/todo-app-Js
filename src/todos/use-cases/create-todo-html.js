import { Todo } from '../models/todo-model';

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('A TODO es requerido');

    const {done, description, id, createdAt} = todo; //Se desestructuriza para no estar escribiendo todo.done...

    const html = `
                <div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
                    <label>${description}</label>
                    <button class="destroy">X</button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    if(done){
    liElement.classList.add('completed');
    }

    return liElement
}