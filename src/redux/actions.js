import axios from 'axios'

export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING'

export const ADD_ARTICLE_PENDING = 'ADD_ARTICLE_PENDING'
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS'


export const getArticles = () => {
    return dispatch => {
        axios.get('http://localhost:3001/articles')
            .then(response => dispatch({
                type:FETCH_ARTICLES_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type:FETCH_ARTICLES_PENDING,
                payload: err
            }))
    }
}

export const addArticle =(newArticle) =>{
    return dispatch =>{
        axios.post('http://localhost:3001/articles', newArticle)
        .then(response=> {
            dispatch({
            type:ADD_ARTICLE_SUCCESS,
            payload: response.data
        })})
        .catch(err=>dispatch({
            type:ADD_ARTICLE_PENDING,
            payload:err
        }))
    }
}