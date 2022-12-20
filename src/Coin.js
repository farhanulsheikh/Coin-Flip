import React, { Component } from 'react'

import './Coin.css'



class Coin extends Component {


    render() {
        return (
            <div className='Coin'>
                <div className='Coin-image'><img src={this.props.value} alt={this.props.name} /></div>
            </div>
        )
    }
}

export default Coin