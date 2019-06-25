import { fromJS } from 'immutable'
import {LOAD_BLOG, LOAD_BLOG_CATEGORY, LOAD_ARTICLE, SUCCESS, FAIL} from '../constants'

const defaultState = fromJS({
  blog_posts: [],
  blog_category: [],
  blog_statuses: [],
  article: {
    author: "",
    body: "",
    category_id: null,
    date_of_publication: "",
    main_image: null,
    post_id: null,
    short_description: "",
    title: ""
  },
  loadPosts: false,
  loadArticle: false,
  updateRoute: null,
});

export default function (state = defaultState, action) {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_BLOG:
      return state.set('loadPosts', true)
    case LOAD_BLOG + SUCCESS:
      return state
        .set('blog_posts', response.posts)
        .set('blog_category', response.category)
        .set('blog_statuses', response.statuses)
        .set('loadPosts', false)
    case LOAD_BLOG + FAIL:
      return state
        .set('blog_posts', error)
        .set('blog_category', error)
        .set('blog_statuses', error)
    case LOAD_BLOG_CATEGORY:
      return state.set('loadPosts', true)
    case LOAD_BLOG_CATEGORY + SUCCESS:
      return state
        .set('blog_posts', response.posts)
        .set('loadPosts', false)
    case LOAD_BLOG_CATEGORY + FAIL:
      return state
        .set('blog_posts', error)

      case LOAD_ARTICLE:
        return state
        .set('loadArticle', true)
    case LOAD_ARTICLE + SUCCESS:
        return state
        .set('article', response.data)
        .set('loadArticle', false)
      case LOAD_ARTICLE + FAIL:
        return state
        .set('article', state.get('article'))//.toJS())
        .set('loadArticle', false)

    default:
      return state;
  }

}
