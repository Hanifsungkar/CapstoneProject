import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsBoard = ({category, query}) => {
  const [articles, setArticles] = useState ([])
  // const { queryOrCategory } = useParams()
  const { query: urlQuery } = useParams()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const searchTerm = urlQuery || query || category || ""
        const response = await axios.get (
          "https://api.nytimes.com/svc/search/v2/articlesearch.json",
          {
            params: {
              q: searchTerm,
              "api-key": `${process.env.REACT_APP_API_KEY}`
            },
          }
        )
        // console.log(response.data)
        setArticles(response.data.response.docs)
      } catch (error) {
        console.error("Error fetching articles", error)
      }
    }

    fetchArticles()
  }, [urlQuery, query, category])


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