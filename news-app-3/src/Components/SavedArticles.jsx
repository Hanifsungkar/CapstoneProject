import React, {useContext} from 'react';
import { SavedArticlesContext } from '../Context/SavedArticlesContext';

const SavedArticles = () => {
    const { savedArticles, removeArticle } = useContext(SavedArticlesContext);
    
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
                    onClick={() => removeArticle(article.url)}
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


//   return (
//     <div className="container mt-4">
//       <h2>Saved Articles</h2>
//       {savedArticles.length === 0 ? (
//         <p>No articles saved yet.</p>
//       ) : (
//         <ul className="list-group">
//           {savedArticles.map((article, index) => (
//             <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//               <span>{article.title}</span>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => removeArticle(index)}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SavedArticles;
