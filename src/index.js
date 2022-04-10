// Este es el archivo de punto de entrada


// importo el modulo creado desde pages/utils.js
// import './styles/main.css'
//import { sayHi } from "./pages/utils"; // cunado webpack vea este archivo lo va a empaquetar en uno solo.

// import route from './utils/route';

// window.addEventListener('load', route);
// window.addEventListener('', route);

require("regenerator-runtime/runtime");
import router from "./routes";

window.addEventListener('load', router);
window.addEventListener('hashchange', router);


// ____________________________________________________________
// import Error404 from './pages/Error404';
// import About from './templates/About';
// import Projects from './templates/Projects';
// import Stack from './templates/myStack';

// const route =(event)=>{
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({},"", event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: Error404,
//     "/about": About,
//     "/projects": Projects,
//     "/stack": Stack
// }

// const handleLocation = async () =>{
//     const path = window.location.href;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("content").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();