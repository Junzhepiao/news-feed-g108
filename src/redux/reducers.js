import {FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_PENDING,ADD_ARTICLE_PENDING,ADD_ARTICLE_SUCCESS} from './actions';

export default ( state = [], action)=>{
    switch (action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return action.payload
        case FETCH_ARTICLES_PENDING:
            return action.payload
        case ADD_ARTICLE_PENDING:
            return state
        case ADD_ARTICLE_SUCCESS:
            return [...action.payload]
        default:
            return state
    }
}