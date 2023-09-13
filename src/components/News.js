import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
// import { useAsyncError } from 'react-router-dom';
const News= (props)=> {
   
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capT= (string)=>{
  return string.charAt(0).toUpperCase()+ string.slice(1);
}
    

   

   const updateNews =async ()=>{
    props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=08bf7b1c960548f4ba287e2523b59b16&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(45)
    let data = await fetch(url);
    let parsed=await data.json();
    props.setProgress(70)
    setArticles(parsed.articles)
    setTotalResults(parsed.totalResults)
    setLoading(false)
    
    props.setProgress(100)
   }

   useEffect(() => {
    document.title = `GO News - ${capT(props.category)}`
     updateNews();    
     // eslint-disable-next-line
     }, [])
   

    

    const handlePrevious= async() => {
      updateNews();
      setPage(page-1)
    } 

   const handleNext=  async ()=>{
     updateNews();
     setPage(page+1)
    }

  
   
    
    return (
      
      <div className='container m-5 '>
        <h3 className='text-center bg-dark text-white' style={{marginTop: '90px'}}><strong>Go News</strong>-{capT(props.category)} Headlines</h3>
       {loading && <Spinner />}
        <div className='row'>
      {!loading && articles.map((element)=>{ 
      
      return <div className='col-md-3' key={element.url}>
        <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
        
        </div>
      })}
        
        </div>
        <div className='container d-flex justify-content-between mt-3'>
          <button  disabled={page<=1} className='bg-white text-dark rounded border-5' onClick={handlePrevious}>&larr; Previous</button>
          <p className='d-flex align-items-center'>{page} &#47; {Math.ceil(totalResults/props.pageSize)}</p>
          <button   disabled={page+1 > Math.ceil(totalResults/props.pageSize)} className='bg-white text-dark rounded border-5' onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  
}



News.defaultProps={
  country : 'in',
  pageSize : 8,
  category : 'general'
}

News.propTypes = {
  country : propTypes.string,
  pageSize :propTypes.number,
  category : propTypes.string
}
export default News



