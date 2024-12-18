import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeArticle } from '../store/action';

const SavedArticles = () => {
    const dispatch = useDispatch()
    const savedArticles = useSelector((state) => state.savedArticles)
    
    const handleRemoveArticle = (url) => {
      console.log('Removing article with URL:', url)
      dispatch(removeArticle(url))
    }

    return (
        <div>
          <h2 className="text-center">Saved Articles</h2>
          {savedArticles.length > 0 ? (
            savedArticles.map((article, index) => (
              <div key={index} className="card bg-dark text-light mb-3">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleRemoveArticle(article.url)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No articles saved yet.</p>
          )}
        </div>
      );
    };
    
    export default SavedArticles;