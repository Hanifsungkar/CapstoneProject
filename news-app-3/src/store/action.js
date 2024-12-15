import axios from 'axios';

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