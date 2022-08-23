const initialState = {
    name: 'Teste'
};

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
    }

    return state;
}