import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handlePurchase() {
        <Redirect to="/confirmation" />
    }

    render() {
        // const items = this.props.cartItems.map((item, i) => {
        // replace below
        const items = [{ image: 'assets/images/dog.jpg', name: 'Dog' }, { image: 'assets/images/rat.jpg', name: 'Rat' }].map((item, i) => {
            return (
                <li key={i} className="cart-item">
                    <div>
                        <img src={item.image} />
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button>-</button>
                        1
                        <button>+</button>
                    </div>
                </li>
            )
        });

        return (
            <div className="cart-page">
                <div className="cart-left">
                    <h3>Your Items</h3>
                    <ul className="cart-items">
                        {items}
                    </ul>
                </div>
                <div className="cart-right">
                    <section>
                        <h4></h4>Order Summary
                    </section>
                    <button onClick={this.handlePurchase}>Purchase</button>
                </div>
                
            </div>
        )
    }

}


const msp = (state) => ({
    cartItems: state.cart.products,
})

export default connect(msp, null)(Cart);