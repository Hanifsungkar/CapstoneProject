import React from 'react';

const NewsItem = ({title, description, src, url}) => {
    return(
<div className="card" style={{maxWidth: "345px"}}>
  <img className="card-img-top" src={src} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary m-4">Read More</a>
    <a href="/" className="btn btn-primary">Save</a>
  </div>
</div>
    )
}

export default NewsItem