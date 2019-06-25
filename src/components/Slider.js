import React from 'react'
import Slider from "react-slick"
import shortid from "shortid"

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */

// морда сладера будет динамичной, оставим стили вообще здесь, будем с лету узнавать что нужно
// карта ?
const style = {
    wrap: props.wrap,
    width: 'wh',
    height: 'content',
    maxWidth: '?',
    // ...
}

const PreviewSlider = (props) => {
    // нужно, что бы регулировать UI
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const white = '#fff'
    const black = '#000'

    const noForRender = props.sliders.every(slide => !slide.visible)

    if (noForRender) {
        return (
            <p
                style={{textAlign: 'center'}}
            >Нет доступных сладов для просмотра</p>
        )
    }

    return (
        <div>
            <Slider {...settings}>
                {props.sliders.map(slide => {
                    if (!slide.visible) return null
                    // TODO
                    // UI не подъехал, стилизуем пока по необходимости
                    // Пока стили оставим styledComponent, а там посмотрим
                    return (
                        <div key={shortid.generate()}>
                            <section className="slide"
                                     style={{
                                         backgroundImage: `url(${slide.image})`,
                                         width: '100%',
                                         display: 'inline-block'
                                     }}>
                                <div className="slide--content">
                                    <h2 style={{color: slide.contrast ? white : black}}>
                                        {slide.title}
                                    </h2>
                                    <span  style={{color: slide.contrast ? white : black}}>
                                {slide.text}
                                </span>
                                    <a className="slide--button button button__medium"
                                       href={`${slide.url}`}>
                                        {slide.button}
                                    </a>

                                </div>
                            </section>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default PreviewSlider
