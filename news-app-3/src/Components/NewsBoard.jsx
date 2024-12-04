import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsBoard = ({category, query}) => {
  const [articles, setArticles] = useState ([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get (
          "https://api.nytimes.com/svc/search/v2/articlesearch.json",
          {
            params: {
              q: query || category,
              "api-key": `${process.env.REACT_APP_API_KEY}`
            },
          }
        )
        setArticles(response.data.response.docs)
      } catch (error) {
        console.error("Error fetching articles", error)
      }
    }

    fetchArticles()
  }, [category, query])


  //   axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
  //   params: {
  //     'q':`${category}`,
  //     'api-key': `${process.env.REACT_APP_API_KEY}`
  //   }
  //   })
  //   .then(res => {
  //     setArticles(res.data.response.docs)
  //   })
  // }, [category])

  return (
    <div>
        <h2 className='text-center'>Featured <span className='badge bg-danger'>News</span></h2>
        {articles.map((item)=>{
           return <NewsItem 
           key={item} 
           title={item.abstract} 
           description={item.lead_paragraph} 
           url={item.web_url}/>
        })}
    </div>
  )
}

export default NewsBoard