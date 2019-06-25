import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styles from './index.module.scss';
import { loadCategory } from '../../../actions/blog';

class Categories extends Component {
  state = {
    active: false
  };

  mainPartParse() {
    {/* TODO раздел норм, можно нести в компоненты */}
    const data = this.props.data.blog_category;
    return (
      <ul className={styles.list}>
        {data.map(category => (
          <li
            className={[styles['list-element'],
              styles[this.state.active === category.category_id ? 'list-element_active' : null]].join(' ')}
            key={shortid.generate()}
            onClick={() => {
              this.props.loadCategory(category.category_id);
              this.setState({ active: category.category_id });
            }}
          >{category.category_name}</li>
        ))}
      </ul>
    );
  }

  render() {
    const categoryList = this.mainPartParse();
    return (
      <div className={styles.categories}>
        {categoryList}
      </div>
    );
  }
}

export default connect(state => ({
  blog: state.blog.toJS()
}), { loadCategory })(Categories);
