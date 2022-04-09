// manejo de rutas

import "core-js/stable";
import "regenerator-runtime/runtime";
import Header from '../templates/Header';
import About from '../templates/About';
import Error404 from '../pages/Error404';

// const routes = {
//     '/': About

// }

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('contetnt');
    
    header.innerHTML = await Header();
};

export default router;