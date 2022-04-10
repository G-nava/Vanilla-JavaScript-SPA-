const resolveRoutes =(route)=>{
    if (route.length <=3){
        let validRoute = route === '/' ? route : '/:id';
        // let validRoute = route';
        return validRoute
    }
    return `/${route}`;
    
}

export default resolveRoutes
