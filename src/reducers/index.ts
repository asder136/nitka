export const text = (state = {text: ''}, action: {type: string, text: string}) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {text: action.text};
        default:
            return state
    }
};