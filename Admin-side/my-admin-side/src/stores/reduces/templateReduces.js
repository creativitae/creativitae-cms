import { READTEMPLATES } from "../actionType";

const insisialData = {
    dataTemplate : []
}
const templateReducer = (state = insisialData, action) => {
    const {type,payload} = action
    switch (type) {
        case READTEMPLATES:
        return {
            ...state,
            dataTemplate : payload
        }
        default:
            return state;
    }
}
export default templateReducer