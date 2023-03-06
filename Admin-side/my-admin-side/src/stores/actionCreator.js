import { USER_LOGIN,USER_REGISTER,READTEMPLATES } from "./actionType";
import axios from "axios"
const BASE_URL = "https://5790-139-228-111-126.ap.ngrok.io/"
export const actionGenerator = (type, payload) => {
    return {
      type,
      payload,
    };
  };
export const readTemplates = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(BASE_URL + 'templates',{
            headers : {
                "ngrok-skip-browser-warning":"any"
            }
            })
            dispatch(actionGenerator(READTEMPLATES,data))
        } catch (error) {
            console.log(error,'ni error');
            throw error
        }
    }
}
export const Register = (dataUser) => {
    console.log(dataUser,'ni data user');
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method : 'POST',
                url : BASE_URL + 'register',
                headers: {
                    'Content-Type': 'application/json',
                },
                data : dataUser
            })
            console.log('masukk');
            // console.log(data,'ni data');
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
export const Login = (dataUser) => {
    console.log(dataUser,'ni data user');
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method : 'POST',
                url : BASE_URL + 'login',
                headers: {
                    'Content-Type': 'application/json',
                },
                data : dataUser
                // body: JSON.stringify(dataUser),
            })
          localStorage.setItem("access_token",data.access_token)
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
