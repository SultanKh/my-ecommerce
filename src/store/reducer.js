import { ACTIONS } from "./actions";



const initialState = {
    lotteryList: [],
    loading: undefined,
    error: undefined
}

const reducer = (state = initialState, action) => {
    if (!action.payload) return state;
    if (action.type === ACTIONS.SET_LIST) {
        return { ...state, lotteryList: [...action.payload.data], loading: action.payload.Loading, error: action.payload.error }

    }
    else return state
}

export default reducer;