import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsBoard = ({category, query}) => {
  // const { queryOrCategory } = useParams()
  const [articles, setArticles] = useState ([])
  const [savedArticles, setSavedArticles] = useState([])

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

  const saveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]); // Tambahkan artikel ke array savedArticles
    alert('Article saved!');
  };

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
           key={item.web_url} 
           title={item.abstract} 
           description={item.lead_paragraph} 
           url={item.web_url}
           saveArticle={() =>
            saveArticle({
              title: item.abstract,
              description: item.lead_paragraph,
              url: item.web_url,
            })
          }
           />
        })}
         <div className="mt-5">
        <h3>Saved Articles</h3>
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => (
            <div key={index} className="mb-3">
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))
        ) : (
          <p>No saved articles yet.</p>
        )}
      </div>
    </div>
  )
}

export default NewsBoard