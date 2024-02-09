import React, { Component } from 'react'

export default class News extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:'siraj',
    //         age:21,
    //     }
    //     if(this.state.name === 'siraj'){
    //         return this.setState.name = 'bario';
    //     }
    // }
    // constructor(){
    //     super();
    //     console.log("this is a constructor");
    // }
    render() {
        let {title,description,imageUrl,readmore}=this.props;
        return (
            
            <div>
                <div className="card my-3">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{width:'100%',objectFit:'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={readmore} target='blank' className="btn btn-sm btn-primary">Read More</a>
                            
                        </div>
                </div>
               
            </div>
        )
    }
}
