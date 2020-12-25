
export const userReducer = (state = { name: "guy", age: 21 }, action) => {
    switch (action.type) {
        case "setName":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "setAge":
            state = {
                ...state,
                age: action.payload
            }
            break

        default:
    }
    return state;
}

const initialLogin = {
    loginState: 0
}

export const loginStatus = (state = initialLogin, action) => {
    switch (action.type) {
        case "LOGIN":
            state = {
                ...state,
                loginState: state.loginState = 1
            }
            break
        case "LOGOUT":
            state = {
                ...state,
                loginState: state.loginState = 0
            }
            break

        default:
    }
    return state
}


const initialConsense = {
    ConsenseState: false
}

export const consenseReducer = (state = initialConsense, action) => {
    switch (action.type) {
        case "showConsense":
            state = {
                ...state,
                ConsenseState: state.ConsenseState = true
            }
            break
        case "hideConsense":
            state = {
                ...state,
                ConsenseState: state.ConsenseState = false
            }
            break

        default:
    }
    return state
}