import {LOAD_BLOG, LOAD_BLOG_CATEGORY, LOAD_ARTICLE} from '../constants';

export function loadBlog(opt) {
    return (dispatch) => {
        dispatch({
            type: LOAD_BLOG,
            callApi: `/api/blog?page=${ /*page_number*/ 1}`,
            method: 'get',
            ...opt
        })
    }
}

export function loadCategory(category_id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_BLOG_CATEGORY,
            callApi: `/api/blog?category=${category_id}`,
            method: 'get',
        })
    }
}

export function loadCurrentArticle(id, opt) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE,
            callApi: `/api/blog/article?id=${id}`,
            method: 'get',
            ...opt
        })
    }
}
