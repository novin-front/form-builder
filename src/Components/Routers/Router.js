import Home from "../Home";
import Containers from "../containers";
import FormList from "../FormList";
import EditForm from "../EditForm";
import NotFound from "../NotFound";
import FormView from "../../MainPage/FormView";

const router =[
    {
        path : "/",
        exact : true,
        component : Home
    },
    {
        path :"/addform",
        exact: true,
        component: Containers
    },
    {
        path: "/formlist/",
        exact: true,
        component: FormList
    },
    {
        path: "/edit/",
        exact: true,
        component: EditForm
    },
    {
        path: "/formview",
        exact:true,
        component : FormView
    },
    {
        exact: true,
        component: NotFound
    },
    
]

export default router;