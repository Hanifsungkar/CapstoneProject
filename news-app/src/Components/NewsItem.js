import React from 'react';
import image from '../assets/News.jpg'

const NewsItem = ({title, description, src, url}) => {
    return(
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img className="card-img-top" src={src?src:image} style={{height: "200px", width: "360px"}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Tidak ada deskripsi"}</p>
    <a href={url} className="btn btn-primary m-4">Read More</a>
    <a href="/" className="btn btn-primary">Save</a>
  </div>
</div>
    )
}

export default NewsItem