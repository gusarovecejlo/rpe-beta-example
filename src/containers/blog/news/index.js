import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import shortid from 'shortid';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { Loader } from '../../../components/icons';
import { URLParser } from '../../../utils/utils';
import { loadBlog } from '../../../actions/blog';


class News extends Component {

  state = {
    page: 1,
    hasMore: true
  }

  getCurrentNews = (id, category) => {
    const parsedCategory = URLParser(category, this.props.data.blog_category, 'category');
    this.props.history.push(`/blog/${parsedCategory}/${id}`);
  };

  getNextPage = (e) => {
    this.setState({
      hasMore: false
    })
    this.props.loadBlog();
  }

  parseNews() {
    const data = this.props.data.blog_posts;
    if (data.message) {
      console.log(data.message);
      return null;
    }
    return data.map(news => {
      if (news.status_id !== 3) return null;
      const text = news.title.length > 40 ? news.title.slice(0, 40) + '...' : news.title;
      return (
        <InfiniteScroll
          pageStart={1}
          key={shortid.generate()}
          loadMore={(e) => {
            this.getNextPage(e)
          }}
          hasMore={this.state.hasMore}
          loader={<Loader/>}
        >
          {/* TODO можно выносить в компоненты */}
          <article
            className={styles['article']}
            onClick={() => this.getCurrentNews(news.post_id, news.category_id)}
            key={shortid.generate()}
          >

            <div className={styles['article-image']}
                 style={{
                   backgroundImage: `url(${news.main_image})`
                 }}
            />
            <span>{this.parseCatName(news.category_id)}</span>
            <span>{` / `}</span>
            <span>{moment(news.create_date)
              .format('DD.MM.YYYY')}</span>
            <h2 className={styles['article-title']}>{text}</h2>
          </article>
        </InfiniteScroll>
      );
    });
  }

  parseCatName(id) {
    const object = this.props.categoryList.find(category => category.category_id === id);
    return object.category_name;
  }

  render() {
    if (this.props.loadPosts) {
      return (
        <div className="loader">
          <Loader/>
        </div>
      );
    }
    return (
      <div className="news">
        <Helmet>
          <title>Блог компании ONETRAK</title>
        </Helmet>
        <div className={styles['articles-preview']}>
          {this.parseNews()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.blog.toJS().blog_category,
  loadPosts: state.blog.toJS().loadPosts
});

const mapStateToActions = {
  loadBlog
};

export default withRouter(connect(mapStateToProps, mapStateToActions)(News));
