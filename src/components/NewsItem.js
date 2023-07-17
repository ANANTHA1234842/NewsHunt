import React from 'react'

const NewsItem =(props)=> {

        let {title,description,imageUrl,newsUrl,author,date}=props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/06/27/1600x900/comet_1_1677992934323_1687842371518.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> 
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem
