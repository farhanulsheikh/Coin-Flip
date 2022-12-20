import React, { Component } from 'react'
import Coin from './Coin';
import head from "./h.png"
import tail from "./t.png"
import "./CoinContainer.css"


class CoinContainer extends Component {
    static defaultProps = {
        coinface: [head, tail]
    };
    constructor(props) {
        super(props)
        this.state = {
            currCoin: head,
            nflips: 0,
            nheads: 0,
            ntails: 0

        }
        this.coinflip = this.coinflip.bind(this)
    }


    //Generate number between 0 and 1 
    generate_random() {
        return Math.floor(Math.random() * 2)
    }


    coinflip() {
        let n = this.generate_random();

        this.setState(st => {
            return {
                ...st,
                currCoin: n ? head : tail,
                nflips: st.nflips + 1,
                nheads: st.nheads + (!n ? 1 : 0), // n is false(0) ? add 1 else add 0
                ntails: st.ntails + (n ? 1 : 0) // n is true(1) ? add 1 else add 0
            }
        })

    }


    render() {
        return (
            <div className='CoinContainer'>
                <h1>Lets Flip a coin!</h1>

                <Coin value={this.state.currCoin} />
                <button className='CoinContainer-button' onClick={this.coinflip}>Flip</button>
                <p>Out of {this.state.nflips} flips there have been {this.state.nheads} heads and {this.state.ntails} tails</p>
            </div>
        )
    }

}

export default CoinContainer