import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from './Article'
class ArticlesList extends Component {
    render() {
       let listOfArticles=this.props.articles.map(article=><Article key={article.id} article={article} />)
      return (
<div>{listOfArticles}</div>
          )
    }

}

const mapStateToProps = state =>({
    articles: state.articles
})

export default connect(mapStateToProps)(ArticlesList);

