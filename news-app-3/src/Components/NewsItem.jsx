import React, { useContext } from 'react';
import { SavedArticlesContext } from '../Context/SavedArticlesContext';


const NewsItem = ({ title, description, url, imageUrl }) => {
  const { saveArticle } = useContext(SavedArticlesContext);

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
        <button className="btn btn-outline-success" onClick={saveArticle}>
          Save Article
        </button>
      </div>
    </div>
  );
};

export default NewsItem;



// return (
//   <div className="card bg-dark text-light"
//   style={{
//     maxWidth: '350px',
//     minWidth: '350px',
//     flex: '1 1 350px', // Cards fleksibel untuk horizontal layout
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     }}
//   >
//     <div className="card-body">
//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt="News Thumbnail"
//           style={{
//             width: '100%',
//             height: '150px',
//             objectFit: 'cover',
//             marginBottom: '10px',
//           }}
//         />
//       )}
//       <h5 className="card-title text-truncate">{title.slice(0, 50)}</h5>
//       <p className="card-text">
//         {description ? description.slice(0, 90) : 'No description available'}
//       </p>
//     </div>
//     <div className="d-flex justify-content-between p-2">
//       <a className="btn btn-primary" href={url} role="button">
//         Read More
//       </a>
//       <button
//         className="btn btn-success"
//         onClick={() => saveArticle({ title, description, url })}
//       >
//         Save
//       </button>
//     </div>
//   </div>
// );
// };

// export default NewsItem;



//   return (
//     <div
//       className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
//       style={{ maxWidth: '350px' }}
//     >
//       <div
//         className="card-body"
//         style={{ height: '200px', width: '360px' }}
//       >
//         <h5 className="card-title">{title.slice(0, 50)}</h5>
//         <p className="card-text">
//           {description
//             ? description.slice(0, 90)
//             : 'No description available'}
//         </p>
//         <a
//           className="btn btn-primary me-2"
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           role="button"
//         >
//           Read More
//         </a>
//         <button
//           className="btn btn-success"
//           onClick={() => saveArticle({ title, description, url })}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;