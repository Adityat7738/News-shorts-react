import React, { Component } from "react";
import Newsitem from "./Newsitem";
// import Spinner from '../Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async update() {
    let furl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catogry}&apiKey=b2d259870f954fde90258f186c20329c&page=${this.state.page}&pageSize=${this.props.pagesz}`;
    this.setState({ loading: true });
    let data = await fetch(furl);
    let pdata = await data.json();
    console.log(pdata);
    this.setState({
      articles: pdata.articles,
      totalResults: pdata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.update();
  }
  fetchmore =  async () => {
    this.setState({page:this.state.page+1})
    let furl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catogry}&apiKey=b2d259870f954fde90258f186c20329c&page=${this.state.page}&pageSize=${this.props.pagesz}`;
    this.setState({ loading: true });
    let data = await fetch(furl);
    let pdata = await data.json();
    console.log(pdata);
    this.setState({
      articles: this.state.articles.concat(pdata.articles),
      totalResults: pdata.totalResults,
      loading: false,







  })};

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          NewsGuru -Top {this.props.catogry} Head Lines
        </h2>
        {/* <Spinner/> */}

        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchmore}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4 className="text-center">Loading...</h4>}
        
>
        <div className="row">

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}
