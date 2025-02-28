/**
 * 
 * @param {string} elementId 
 */

export const app = (elementId) => {

    //Cuando la función app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola mundo</h1>';
        document.querySelector(elementId).append(app);
    })();

}