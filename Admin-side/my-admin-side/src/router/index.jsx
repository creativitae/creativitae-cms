import BaseLayout from '../BaseLayout'
import Tabel from '../views/Tabel'
// import AddTemplate from '../views/AddTemplate'
import { LoginPage } from '../views/LoginPage'
import { RegisterPage } from '../views/RegisterPage'
import {createBrowserRouter,redirect} from 'react-router-dom'

const router = createBrowserRouter([
    {
        element : <BaseLayout/>,
        children : [
            {
                element : <Tabel/>,
                path : '/home',
                loader : async () => {
                    if(!localStorage.access_token) {
                        return redirect('/')
                    } else {
                        return null
                    }
                }
            },
            
           
        ]
    },
   
    {
        element : <LoginPage/>,
        path: '/'
    },{
        element : <RegisterPage/>,
        path : '/register'
    }
])

export default router