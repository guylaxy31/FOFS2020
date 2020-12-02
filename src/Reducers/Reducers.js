
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

const initialState = {
    result: 15000
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result += action.payload
            }
            break;
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