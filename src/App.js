import React, { Component } from 'react';
import PostArticle from './components/PostArticle';
import ArticlesList from './components/ArticlesList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getArticles} from './redux/actions';

class App extends Component {
  componentDidMount(){
    this.props.getArticles()
  }

  render() {
    return (
      <div>
      <div>Article App</div>
      <div><ArticlesList/></div>
      <div><PostArticle/></div>
      </div>
    );  
  }
}

function mapDispatchToProps(dispatch){
  return{
    getArticles: bindActionCreators(getArticles, dispatch),
  }
}
export default connect(null,mapDispatchToProps)(App);
