// Este es el archivo de punto de entrada


// importo el modulo creado desde pages/utils.js
// import './styles/main.css'
//import { sayHi } from "./pages/utils"; // cunado webpack vea este archivo lo va a empaquetar en uno solo.

import router from './routes';

window.addEventListener('load', router);
