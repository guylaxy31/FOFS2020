import { CREATE_RES, FETCH_RES } from "../action/resaction";
const intialState = {
    restaurant: []
}

export default function(state = intialState,action){
    switch(action.type) {
        case FETCH_RES:
            return{
                ...state,
                restaurant: action.payload
            }
        case CREATE_RES:
            console.log(action.payload)
            // return {
            //     ...state,
            //     restaurant: state.restaurant.concat(action.payload)
            // }
    }
    return state;
}