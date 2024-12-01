import React from 'react'

const NewsItem = ({title, description, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "350px"}}>
  {/* <img classname="card-img-top" src="..." alt="Card image cap" /> */}
  <div classname="card-body" style={{height: "200px", width: "360px"}}>
    <h5 classname="card-title">{title.slice(0, 50)}</h5>
    <p classname="card-text">{description?description.slice(0, 90): "No description available"}</p>
    <a className="btn btn-primary" href={url} role="button">Read More</a>
  </div>
</div>
  )
}

export default NewsItem