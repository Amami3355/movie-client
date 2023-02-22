
export default (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { connected: true, user: action.user }
        case 'LOGOUT':
            return { connected: false, user: null }
        default:
            return state
    }
}