import React, {Component} from 'react'
import ProductionSlider from '../../../components/Slider'
import './index.scss'

class Slider extends Component {

  // Пока оказалось все слишком просто, подозрительно
  render() {
    return (
      <div className="slider">
        <ProductionSlider
          production
          sliders={this.props.slider.slides}
        />
      </div>
    )
  }
}

export default Slider