import React, { Component } from 'react'

export default class News extends Component {
    render() {
        let {title,description,imageUrl,readmore,date,author,source}=this.props;
        return (
            
            <div>
                <div className="card my-3">
                    <img src={imageUrl?imageUrl:".images/default.jpg"} className="card-img-top" alt="..." style={{width:'100%',objectFit:'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5><span className='position-absolute top-0 translate-middle bages rounded-pill bg-danger text-green py-1 px-1' style={{zIndex:'1'}} >{source}</span>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">by {author?author:'unknown'} and {date?new Date(date).toGMTString():''}</small></p>
                            <a href={readmore} target='blank' className="btn btn-sm btn-primary">Read More</a>
                            
                        </div>
                </div>
               
            </div>
        )
    }
}
