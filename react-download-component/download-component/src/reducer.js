export default function progressReducer(state, action) {
    switch (action.type) {
        case 'DOWNLOAD_PROGRESS':
            return {
                ...state,
                progress: state.progress + 1
            }
        case 'STOP':
            return {
                ...state,
                isLoad: false
            }
        case 'START':
            return {
                ...state,
                isLoad: true
            }
        default:
            return state
    }
}