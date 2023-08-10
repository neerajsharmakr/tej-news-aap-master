import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }

  async getAPIData() {
    var rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pagesize=50&apiKey=c40ad56a62a94ee1830ca4a52e7edac7`
    );
    //var rawdata = await fetch("https://newsapi.org/v2/everything?q=all&language=hi&pagesize=12&apiKey=c66887260083453088f62057966b20eb")
    var result = await rawdata.json();
    // console.log(result)
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
    });
  }
  //componentDidMount, Initial render pe API ko Call  hai
  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(old) {
    if (this.props.q !== old.q || this.props.language !== old.language) {
      this.getAPIData();
    }
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <h5 className="background text-center text-light p-2 mt-1">
            {this.props.q} News Section
          </h5>
          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <NewsItems
                  key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
