// manejo de rutas
import "core-js/stable";
import "regenerator-runtime/runtime";

import Header   from '../templates/Header';
import About    from '../templates/About';
import Projects from '../templates/Projects';
import myStack  from '../templates/myStack';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    404: Error404,
    "/": About,
    "/projects": Projects,
    "/stack": myStack
}


const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    
    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route]: Error404;
    content.innerHTML = await render();
}

export default router;