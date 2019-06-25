import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
import {Helmet} from "react-helmet"
import {loadCurrentArticle} from '../../actions/blog'
import {Loader} from "../../components/icons"
import style from './article.module.scss'


class Article extends React.Component {
    componentDidMount() {
        const articleId = this.props.match.params.article
        this.props.loadCurrentArticle(articleId)
    }

    render() {
        if (this.props.articleLoad) {
            return (
                <div className="loader">
                    <Loader/>
                </div>
            )
        }
        const {title, body, create_date} = this.props.article
        return (
            <article className={style.wrapper}>

                <Helmet>
                    <title>
                        {title}
                    </title>
                </Helmet>

                <h1 className={style.title}>{title}</h1>
                <p className={style.paragraph}>Создано: {moment(create_date).format('MM.DD.YYYY')}</p>
                {/*<img className={style["single-image"]} src={main_image} alt=""/>*/}
                <ReactMarkdown
                    source={body}
                    escapeHtml={false}
                />
            </article>
        )
    }
}

const mapStateToProps = state => ({
    blog: state.blog.toJS(),
    article: state.blog.toJS().article,
    articleLoad: state.blog.toJS().loadArticle,
})

const mapDispatchToProps = ({
    loadCurrentArticle
})
export default connect(mapStateToProps, mapDispatchToProps)(Article)
