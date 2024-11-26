import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY_2}`
        fetch (url).then(Response => Response.json()).then(data => setArticles(data.articles))
    }, [category])
    
    return(
        <div>
            <h2 className='text-center'>MAIN NEWS</h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard