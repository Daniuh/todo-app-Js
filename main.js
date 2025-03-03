import './src/css/style.css';
import './src/css/style-dark-mode.css';

import { App } from './src/todos/app';
import todoStore from "./src/store/todo-store";

todoStore.initStore();

App('#app');
