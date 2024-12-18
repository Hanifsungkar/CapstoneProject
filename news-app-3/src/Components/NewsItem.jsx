import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveArticle } from '../store/action';


const NewsItem = ({ title, description, url, imageUrl }) => {
  const dispatch = useDispatch()
  const savedArticles = useSelector((state) => state.savedArticles)
  const isSaved = savedArticles.some((article) => article.url === url)

  const handleSaveArticle = () => {
    if (!isSaved) {
      dispatch(saveArticle({
        title,
        description,
        url,
        imageUrl,
      }));
    }
  }
  
  return (
    <div className="card bg-dark text-light" style={{ 
            maxWidth: '350px',
            minWidth: '350px',
            flex: '1 1 350px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'}}>
      {imageUrl && (
        <img
          src={imageUrl}
          className="card-img-top"
          alt="News"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            marginBottom: '10px',
           }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : 'No description available'}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mb-2"
        >
          Read More
        </a>
        <button
        className={`btn ${isSaved ? 'btn-success' : 'btn-outline-success'}`}
        onClick={handleSaveArticle}
        disabled={isSaved}
        >
          {isSaved ? 'Saved' : 'Save Article'}
        </button>
      </div>
    </div>
  );
};

export default NewsItem;