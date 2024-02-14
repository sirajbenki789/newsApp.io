import React, { Component } from 'react'
import News from './News'
import Loading from './Loading';

export default class NewsItems extends Component {
  articles=[]
  constructor(){
    super();
    this.state={
     articles:this.articles,
     page:1,
     loading:false,
    }
    console.log(this.state.page);
  }

async updateNews(){
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6fd201486d14a649d6ac4a1e12de6eb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data=await fetch(url)
  let parseData = await data.json();
  this.setState({loading:false})
  console.log(parseData);
  this.setState({articles:parseData.articles,
    totalResults:parseData.totalResults,
  })
}
  async componentDidMount(){
    this.updateNews();
  }
  handlePreClick=async()=>{
    this.setState({ page: this.state.page - 1,})
    this.updateNews();
  }
  handlenextClick=async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/5)){

    }else{
      this.setState({ page: this.state.page + 1,})
    this.updateNews();
    }
}
  
  render(){
    return (
      <div className='container'>
        <h1 className='my-4'>This is top 10 News About {this.props.category}</h1>
          {this.state.loading?<Loading/>:''}
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <News title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 80):""} imageUrl={!element.urlToImage?'':element.urlToImage} readmore={element.url?element.url:""}
              date={element.publishedAt} author={element.author} source={element.source.name}/>
              </div>
          })}
          </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>	&larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/5)}type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next	 &rarr; </button>
      
            </div>
      </div>
    )
  }
}
