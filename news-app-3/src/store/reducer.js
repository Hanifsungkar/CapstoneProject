const initialState = {
    articles: [],
    savedArticles: [],
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
        case 'SAVE_ARTICLE': {
            const articleExists = state.savedArticles.some(
                (article) => article.url === action.payload.url
            )
            return articleExists
            ? state
            : { ...state, savedArticles: [...state.savedArticles, action.payload] };
        }
        case 'REMOVE_ARTICLE':
            const updatedArticles = state.savedArticles.filter(
                (article) => article.url !== action.payload
            )
            return {
                ...state,
                savedArticles: updatedArticles,
            }
        default:
        return state
    }
}

export default reducer