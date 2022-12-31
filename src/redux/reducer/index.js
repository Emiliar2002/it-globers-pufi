// Importa las actions types que necesites acá:

import { SUBSCRIBE_TO_NEWSLETTER } from "../actions";


const initialState = {
    response: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBSCRIBE_TO_NEWSLETTER: return {...state, response: action.payload}
        default: return {...state}
    };
};

export default rootReducer;
