import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/action';
import NewsItem from './NewsItem';
// import axios from 'axios';

const NewsBoard = ({category, query}) => {
  // const { queryOrCategory } = useParams()
  // const [articles, setArticles] = useState ([])
  const { query: urlQuery } = useParams()
  const dispatch = useDispatch()
  const { articles, loading, error } = useSelector((state) => state)
  const [savedArticles, setSavedArticles] = useState([])

  useEffect(() => {
    const searchTerm = urlQuery || query || category || ''
    dispatch(fetchArticles(searchTerm))
  }, [dispatch, urlQuery, query, category])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  //   const fetchArticles = async () => {
  //     try {
  //       const searchTerm = urlQuery || query || category || ""
  //       const response = await axios.get (
  //         "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  //         {
  //           params: {
  //             q: searchTerm,
  //             "api-key": `${process.env.REACT_APP_API_KEY}`
  //           },
  //         }
  //       )
  //       // console.log(response.data)
  //       setArticles(response.data.response.docs)
  //     } catch (error) {
  //       console.error("Error fetching articles", error)
  //     }
  //   }

  //   fetchArticles()
  // }, [urlQuery, query, category])

  const saveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
    alert('Article saved!');
  };

  return (
    <div>
        <h2 className='text-center'>Featured <span className='badge bg-danger'>News</span></h2>
        <div
      className="d-flex flex-wrap justify-content-center gap-3"
      style={{ margin: '20px auto', maxWidth: '1200px' }}
    >
        {articles.map((item)=>{
           return <NewsItem 
           key={item.web_url} 
           title={item.abstract} 
           description={item.lead_paragraph} 
           url={item.web_url}
           imageUrl={
            item.multimedia && item.multimedia.length > 0
              ? `https://www.nytimes.com/${item.multimedia[0].url}`
              : null }
           saveArticle={() =>
            saveArticle({
              title: item.abstract,
              description: item.lead_paragraph,
              url: item.web_url,
            })
          }
           />
        })}
    </div>
    </div>
  )
}

export default NewsBoard