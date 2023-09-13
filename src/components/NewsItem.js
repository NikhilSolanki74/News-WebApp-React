import React from 'react'


const NewsItem=(props)=>{
  
    let {title , description , imageurl ,newsurl,author, date} = props
    return (
      
      <div >

<div className="card m-2" style={{ width:'18rem' }} >
  <img src={!imageurl ? "https://fdn.gsmarena.com/imgroot/news/23/09/mediatek-develops-3nm-chipset/-952x498w6/gsmarena_000.jpg" :imageurl } className="card-img-top" alt="..."/>
   
  <div className="card-body">
    <h5 className="card-title" style={{ overflow: 'hidden' }}>{title}</h5>
    <p className="card-text" style={{ overflow: 'hidden' }}>{description}</p>
    <p className="card-text"><small className="text-body-primary">By {author? author : "Unknown"} , On {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
        
      
    )
  
}
export default NewsItem