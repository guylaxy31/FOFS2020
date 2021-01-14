
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
        case "SHOW_CONSENSE":
            state = {
                ...state,
                ConsenseState: state.ConsenseState = true
            }
            break
        case "CLOSE_CONSENSE":
            state = {
                ...state,
                ConsenseState: state.ConsenseState = false
            }
            break

        default:
    }
    return state
}

const GenderSelection = {
    GenderState: 'null'
}

export const genderSelectionReducer = (state = GenderSelection, action) => {
    switch (action.type) {
        case "SET_MALE_GENDER":
            state = {
                ...state,
                GenderSelection: state.GenderState = 'male'
            }
            break
        case "SET_FEMALE_GENDER":
            state = {
                ...state,
                GenderSelection: state.GenderState = 'female'
            }
            break

        default:
    }
    return state
}