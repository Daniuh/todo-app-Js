(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();const S=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué vas a hacer hoy?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
            <button class="clear-completed">Borrar completados</button>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
    </footer>\r
</section>\r
\r
<div class="div-button">\r
    <button id="theme-toggle" class="div-button2">🌙 Oscuro</button>\r
</div>\r
\r
\r
<footer class="info">\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="https://github.com/Daniuh">Daniuh</a></p>\r
    <p>© 2025 Daniel Naranjo. Hecho con ❤️ y café.</a></p>\r
</footer>`,r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let T;const P=new Uint8Array(16);function k(){if(!T){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");T=crypto.getRandomValues.bind(crypto)}return T(P)}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:A};function I(e,t,l){var o;if(C.randomUUID&&!e)return C.randomUUID();e=e||{};const i=e.random??((o=e.rng)==null?void 0:o.call(e))??k();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,E(i)}class f{constructor(t){this.id=I(),this.description=t,this.done=!1,this.createdAt=new Date}}const u={All:"all",Completed:"Completed",Pending:"Pending"},d={todos:[new f("Piedra del tiempo"),new f("Piedra del alma"),new f("Piedra del poder"),new f("Piedra de la realidad")],filter:u.All},x=()=>{L(),console.log("Init Store")},L=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=u.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},y=()=>{localStorage.setItem("state",JSON.stringify(d))},D=(e=u.All)=>{switch(e){case u.All:return[...d.todos];case u.Completed:return d.todos.filter(t=>t.done);case u.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Opción ${e} no es valida.`)}},O=e=>{if(!e)throw new Error("La descripción es necesaria");d.todos.push(new f(e)),y()},U=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),y()},F=e=>{d.todos=d.todos.filter(t=>t.id!==e),y()},N=()=>{d.todos=d.todos.filter(e=>!e.done),y()},q=(e=u.All)=>{d.filter=e,y()},H=()=>d.filter,c={initStore:x,loadStore:L,getTodos:D,addTodo:O,toggleTodo:U,deletedTodo:F,deletedCompleted:N,setFilter:q,getCurrentFilter:H};let h;const M=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${e} not found`);h.innerHTML="",t.forEach(l=>{h.append(R(l))})},R=e=>{if(!e)throw new Error("A TODO es requerido");const{done:t,description:l,id:i,createdAt:o}=e,s=`
                <div class="view">
                    <input class="toggle" type="checkbox" ${t?"checked":""}>
                    <label>${l}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`,a=document.createElement("li");return a.innerHTML=s,a.setAttribute("data-id",i),t&&a.classList.add("completed"),a};let b;const V=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=c.getTodos(u.Pending).length},g={TodoList:".todo-list",NewTodoInputs:"#new-todo-input",ClearCompleted:".clear-completed",TodoFilter:".filtro",PendingCount:"#pending-count"},$=e=>{const t=()=>{const n=c.getTodos(c.getCurrentFilter());M(g.TodoList,n),l()},l=()=>{V(g.PendingCount)};(()=>{const n=document.createElement("div");n.innerHTML=S,document.querySelector(e).append(n),t(),l()})();const i=document.querySelector(g.NewTodoInputs),o=document.querySelector(g.TodoList),s=document.querySelector(g.ClearCompleted),a=document.querySelectorAll(g.TodoFilter);i.addEventListener("keyup",n=>{n.keyCode===13&&n.target.value.trim().length!==0&&(c.addTodo(n.target.value),t(),l(),n.target.value="")}),o.addEventListener("click",n=>{const p=n.target.className==="toggle",m=n.target.closest("[data-id]");!m||!p||(c.toggleTodo(m.getAttribute("data-id")),t(),l())}),o.addEventListener("click",n=>{const p=n.target.className==="destroy",m=n.target.closest("[data-id]");!m||!p||(c.deletedTodo(m.getAttribute("data-id")),t(),l())}),s.addEventListener("click",()=>{c.deletedCompleted(),t(),l()}),a.forEach(n=>{n.addEventListener("click",p=>{switch(a.forEach(m=>m.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":c.setFilter(u.All);break;case"Pendientes":c.setFilter(u.Pending);break;case"Completados":c.setFilter(u.Completed);break}t(),l()})})};c.initStore();$("#app");const w=document.getElementById("theme-toggle"),v=document.body;w.addEventListener("click",()=>{v.classList.toggle("dark-mode"),v.classList.contains("dark-mode")?(w.textContent="Claro ☀️",localStorage.setItem("theme","dark")):(w.textContent="🌙 Oscuro",localStorage.setItem("theme","light"))});localStorage.getItem("theme")==="dark"&&(v.classList.add("dark-mode"),w.textContent="Claro ☀️");
