import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArt } from '../store/action';
import NewsItem from './NewsItem';

const NewsBoard = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const category = useSelector((state) => state.category);
  const searchTerm = useSelector((state) => state.searchTerm);
  const theme = useSelector((state) => state.theme)

  // const { articles, loading, error, category, searchTerm } = useSelector((state) => state)
  const [savedArticles, setSavedArticles] = useState([])
  
  // useEffect(() => {
  //   const searchTerm = urlQuery || query || category || ''
  //   dispatch(fetchArticles(searchTerm))
  // }, [dispatch, urlQuery, query, category])

  useEffect(() => {
    dispatch(fetchArt(category))
  }, [dispatch, category])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  const saveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
    alert('Article saved!');
  };

  return (
    <div className={`p-4 ${theme === 'light' ? 'bg-white text-dark' : 'bg-dark text-light'}`}
    style={{ minHeight: '100vh' }}>
      <h2 className="text-center">
        Featured <span className={`badge ${theme === 'light' ? 'bg-danger' : 'bg-warning'}`}>News</span>
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center text-danger my-4">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Articles Section */}
      {!loading && !error && (
        <div
          className="d-flex flex-wrap justify-content-center gap-3"
          style={{ margin: '20px auto', maxWidth: '1200px' }}
        >
          {articles.length > 0 ? (
            articles.map((item) => {
              return (
                <NewsItem
                  key={item.web_url}
                  title={item.abstract || 'No Title Available'}
                  description={item.lead_paragraph || 'No Description'}
                  url={item.web_url}
                  imageUrl={
                    item.multimedia && item.multimedia.length > 0
                      ? `https://www.nytimes.com/${item.multimedia[0].url}`
                      : 'https://via.placeholder.com/200' // Fallback image
                  }
                  saveArticle={() =>
                    saveArticle({
                      title: item.abstract,
                      description: item.lead_paragraph,
                      url: item.web_url,
                    })
                  }
                />
              );
            })
          ) : (
            <p className="text-center text-muted">No articles found for "{searchTerm}".</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard

//   return (
//     <div>
//         <h2 className='text-center'>Featured <span className='badge bg-danger'>News</span></h2>
//         <div
//       className="d-flex flex-wrap justify-content-center gap-3"
//       style={{ margin: '20px auto', maxWidth: '1200px' }}
//     >
//         {articles.map((item)=>{
//            return <NewsItem 
//            key={item.web_url} 
//            title={item.abstract} 
//            description={item.lead_paragraph} 
//            url={item.web_url}
//            imageUrl={
//             item.multimedia && item.multimedia.length > 0
//               ? `https://www.nytimes.com/${item.multimedia[0].url}`
//               : null }
//            saveArticle={() =>
//             saveArticle({
//               title: item.abstract,
//               description: item.lead_paragraph,
//               url: item.web_url,
//             })
//           }
//            />
//         })}
//     </div>
//     </div>
//   )
// }