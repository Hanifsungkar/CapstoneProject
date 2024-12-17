const initialState = {
    articles: [],
    loading: false,
    error: null,
    category: 'indonesia',
    searchTerm: '',
    theme: 'light',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return{
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            }
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload,
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload,
            }
        case 'FETCH_ARTICLES_REQUEST':
            return {
            ...state,
            loading: true,
            error: null,
            }
        case 'FETCH_ARTICLES_SUCCESS':
            return {
            ...state,
            loading: false,
            articles: action.payload,
            }
        case 'FETCH_ARTICLES_FAILURE':
            return {
            ...state,
            loading: false,
            error: action.payload,
            }
        default:
        return state
    }
}

export default reducer