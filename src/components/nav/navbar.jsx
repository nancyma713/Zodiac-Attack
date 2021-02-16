import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let quantity = 0;
        this.props.cartItems.forEach(item => quantity += item.quantity);

        return (
            <div className='nav-container'>
                <div className='home'>
                    <Link to='/'><h1>Zodiac Attack</h1></Link>
                </div>
                <div className='links'>
                    <Link to='/cart'>
                        <div>My Cart <span className="cart-quantity">{quantity}</span></div>
                    </Link>
                </div>
            </div>
        );
    }
}

const msp = (state) => ({
    cartItems: state.cart.products,
})

export default connect(msp, null)(NavBar);