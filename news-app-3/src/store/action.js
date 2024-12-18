import axios from 'axios';

// Dark/Light Mode
export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
})

// Search Articles
export const setSearchTerm = (query) => ({
    type: 'SET_SEARCH_TERM',
    payload: query,
})

export const fetchSearchArticles = (searchTerm) => async (dispatch) => {
    dispatch(fetchArticlesRequest())
    try {
        const response = await axios.get(
            'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            {
                params: {
                    q: searchTerm,
                    'api-key': process.env.REACT_APP_API_KEY,
                },
            }
        )
        dispatch(fetchArticlesSuccess(response.data.response.docs))
    } catch (error) {
        dispatch(fetchArticlesFailure(error.message))
    }
}

// Fetch Articles
export const fetchArticlesRequest = () => ({
    type: 'FETCH_ARTICLES_REQUEST'
})

export const fetchArticlesSuccess = (articles) => ({
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: articles,
  });
  
export const fetchArticlesFailure = (error) => ({
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error,
  });

export const fetchArticles = (searchTerm) => async (dispatch) => {
    dispatch(fetchArticlesRequest())
    try {
        const response = await axios.get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        {
            params: {
                q: searchTerm,
                'api-key': process.env.REACT_APP_API_KEY,
            }
        }
        )
        dispatch (fetchArticlesSuccess(response.data.response.docs))
    } catch (error) {
        dispatch(fetchArticlesFailure(error.message))
    }
}

// Article Category (Indonesia & Programming)
export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
})

export const fetchArt = (query) => async (dispatch) => {
    dispatch({ type: 'FETCH_ARTICLES_REQUEST'})
    try {
        const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json()
        dispatch ({ type: 'FETCH_ARTICLES_SUCCESS', payload: data.response.docs})
    } catch (error) {
        dispatch({ type: 'FETCH_ARTICLES_FAILURE', payload: error.message})
    }
}

// Save & Remove Articles
export const saveArticle = (article) => ({
    type: 'SAVE_ARTICLE',
    payload: article,
})

export const removeArticle = (url) => {
    return {
    type: 'REMOVE_ARTICLE',
    payload: url,
}
}