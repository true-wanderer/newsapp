// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title,description,imageUrl,url}=this.props;
//     return (

//       <div className='my-3'>
//         <div className="card" style={{width: "18rem"}}>
//   <img src={imageUrl} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href={url} target="blank" className="btn btn-sm btn-primary">Read More</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItem

import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={article.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a href={article.url} target="blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
