const initialState = {
    articles: [],
    loading: false,
    error: null,
    category: 'indonesia',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
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