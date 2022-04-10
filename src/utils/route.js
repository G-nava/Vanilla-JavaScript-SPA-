// require("regenerator-runtime/runtime");

// import Error404 from '../pages/Error404';
// // import Header from '../templates/Header';
// import About from '../templates/About';
// import Projects from '../templates/Projects';
// import Stack from '../templates/myStack';

// const route =(event)=>{
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({},"", event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: Error404,
//     "/": About,
//     "/projects": Projects,
//     "/stack": Stack
// }

// const handleLocation = async () =>{
//     // const Header = null || document.getElementById('header');
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data)=>data.text());
//     // Header.innerHTML = await Header();
//     document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// export default handleLocation;