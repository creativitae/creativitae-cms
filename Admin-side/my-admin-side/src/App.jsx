import router from "./router";
// import { RouterProvider } from "react-router";
import { RouterProvider } from "react-router";
import Sidebar from "./componets/Sidebar";
import {Provider} from "react-redux"
import store from "./stores";
function app () {
    return(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
        // <div>
        //     <Sidebar/>
        // </div>
       
    )
}


export default app