// import React from 'react'

// const NewsItem = ({title, description, url}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "350px"}}>
//   {/* <img classname="card-img-top" src="..." alt="Card image cap" /> */}
//   <div classname="card-body" style={{height: "200px", width: "360px"}}>
//     <h5 classname="card-title">{title.slice(0, 50)}</h5>
//     <p classname="card-text">{description?description.slice(0, 90): "No description available"}</p>
//     <a className="btn btn-primary" href={url} role="button">Read More</a>
//   </div>
// </div>
//   )
// }

// export default NewsItem

import React, { useContext } from 'react';
import { SavedArticlesContext } from '../Context/SavedArticlesContext';


const NewsItem = ({ title, description, url }) => {
  const { saveArticle } = useContext(SavedArticlesContext);
  
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '350px' }}>
      <div className="card-body" style={{ height: '200px', width: '360px' }}>
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : 'No description available'}</p>
        <a className="btn btn-primary" href={url} role="button">
          Read More
        </a>
        <button
          className="btn btn-success ms-2"
          onClick={() => saveArticle({ title, description, url })}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewsItem;


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