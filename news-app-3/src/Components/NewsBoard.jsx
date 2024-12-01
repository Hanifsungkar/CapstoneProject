import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState ([])

  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
    params: {
      'q':`${category}`,
      'api-key': `${process.env.REACT_APP_API_KEY}`
    }
    })
    .then(res => {
      setArticles(res.data.response.docs)
    })
  }, [category])

  // useEffect(() => {
  //   let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${process.env.REACT_APP_API_KEY}`
  //   fetch(url)
  //   .then(res => {
  //     setArticles(res.data.response.docs)
  //   })
  //   // .then(Response=> Response.json()).then(data=> setArticles(res.data.response.docs))
  // },[])

  return (
    <div>
        <h2 className='text-center'>Featured <span className='badge bg-danger'>News</span></h2>
        {articles.map((item)=>{
           return <NewsItem key={item} title={item.abstract} description={item.lead_paragraph} url={item.web_url}/>
        })}
    </div>
  )
}

export default NewsBoard