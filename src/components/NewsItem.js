import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      
        <div className="card" style={{width:"18rem"}}>
         <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/z/world-news-background-news-text-earth-globe-front-mov-moving-directions-76276244.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
                <a href={newsUrl} className="btn btn-primary" rel="noreferrer" target="_blank">Read More...</a>
            </div>
         </div>
      
    )
  }
}
