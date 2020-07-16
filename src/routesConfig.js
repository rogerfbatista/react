import   Home from  "./Pages/home/home";
import Usuario from "./Pages/Usuario/Usuario";


const routesConfig = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/Usuario",
        component:Usuario,
        exact:true
    }
]

export default routesConfig;