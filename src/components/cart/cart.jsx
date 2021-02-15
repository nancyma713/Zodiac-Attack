import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handlePurchase() {
        return <Redirect to="/confirmation" />
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);

        const items = this.props.cartItems.map((item, i) => {
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

        let subtotal = 0;
        for (let i = 0; i < this.props.cartItems.length; i++) {
            const item = this.props.cartItems[i];
            subtotal += item.onSale ? item.price * 0.85 : item.price;
        }
        const total = intToFloat(subtotal + 0.0625 * subtotal + 3, 2);
        subtotal = intToFloat(subtotal, 2);
        const tax = intToFloat(0.0625 * subtotal, 2);
        const shipping = intToFloat(3, 2);

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
                        <h4>Order Summary</h4>
                        <p>{items.map((item, i) => <li key={i}>{item.name}</li>)}</p>
                        <p>Subtotal: ${subtotal}</p>
                        <p>Tax: ${tax}</p>
                        <p>Shipping: ${shipping}</p>
                        <p>Total: ${total}</p>
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