import React, { Component } from 'react'
import Thunderbolt from '../assets/images/Thunderbolt.svg'

 class CalcInfo extends Component {


    componentDidUpdate(){
        this.calcData();
    }

    // componentDidMount(){
       
    // }

    calcData = () => {
        this.props.data.forEach((values,  ) => {
                //  values.number * values.time * values.energy
        })
    }

    render() {


        return (
        <div className='calc-total'>
            <div className="mr4 ml4 mt3">
            <h3 className="ttu tracked">Calculations</h3>
          </div>
          <div className="dib mr4 ml4">  
            <h4>Total Consumption</h4>
          </div>
          <div className="dib mr4 ml4"> 
            <img src={Thunderbolt} alt='thunderbolt' />
          </div >
          <div className="dib mr4 ml4">300<span>Wh/day</span></div>
        </div>
        )
    }
}

export default CalcInfo
