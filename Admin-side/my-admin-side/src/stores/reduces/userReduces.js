import { USER_LOGIN,USER_REGISTER } from "../actionType";


const insisialData = {
    user : []
}

const userReducer = (state = insisialData,action) => {
    const {type,payload} = action
    switch (type) {
        case USER_LOGIN:
            return{
                ...state,
                user : payload
            }
        default:
            return state
    }
}
export default userReducer