import React, { Component } from 'react'
import Thunderbolt from '../assets/images/Thunderbolt.svg'

 class CalcInfo extends Component {

    render() {


        const values = this.props.data.map((values) => {
              const value = values.number * values.time * values.energy
              return value
        }).reduce((a, b) => a + b, 0)
        console.log(values)

        return (
        <div className='calc-total'>
            <div className="mr4 ml4 mt3">
            <h3 className="ttu tracked">Calculations</h3>
          </div>
          <div className=" ma3">  
            <h4>Inverter / UPS Rating</h4>
          </div>
          <div className=" ma3">  
            <h4>Rating of Charge Controller</h4>
          </div>
          <div className=" ma3">  
            <h4>Required No of Solar Panel</h4>
          </div>
          <div className=" ma3">  
            <h4>No of Batteries for Backup Power</h4>
          </div>
          <div className=" dib mr4 ml4">  
            <h4>Total Consumption</h4>
          </div>
          <div className=" dib mr4 ml4"> 
            <img src={Thunderbolt} alt='thunderbolt' />
          </div >
          <div className="dib mr4 ml4">{values}<span>Wh/day</span></div>
        </div>
        )
    }
}

export default CalcInfo
