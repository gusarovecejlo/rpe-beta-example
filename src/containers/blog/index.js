import React, {Component} from 'react'
import {connect} from 'react-redux'
import Slider from './slider'
import Categories from './categories'
import News from './news'
import {loadBlog} from '../../actions/blog'
import {getSlider} from '../../actions/slider'
import '../../index.scss'


class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidMount() {
    this.props.getSlider()
    this.props.loadBlog()
    if (this.props.router) {
      if (this.props.blog.blog_category.length) {
        const id = this.props.blog.blog_category.find(cate => cate.alias === this.props.router.match.params.category)
        console.log('--id', id)
      }
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    console.log('blog catch error: ', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>BLOG ERROR</p>
      );
    } else {
      return (
        <section className="blog">
          <Slider slider={this.props.slider}/>
          <Categories data={this.props.blog}/>
          <News data={this.props.blog}/>
        </section>
      );
    }

  }
}

export default connect(
  (state) => ({
    blog: state.blog.toJS(),
    slider: state.slider.toJS(),
  }), {
    loadBlog,
    getSlider
  }
)(Blog)
