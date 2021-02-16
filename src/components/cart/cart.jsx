import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct, increaseProductQuantity, decreaseProductQuantity, clearCart } from '../../actions/cart_actions';
import Confirmation from '../confirmation/confirmation';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseModal: false
        }

        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handlePurchase() {
        this.setState({ purchaseModal: true });
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);

        const items = this.props.cartItems.map((item, i) => {
            return (
                <li key={i} className={item.quantity === 0 ? "cart-item-hidden" : "cart-item"}>
                    <div>
                        <Link to={`/${item.sku}/${item.name}`}><img src={item.image} /></Link>
                        <Link to={`/${item.sku}/${item.name}`}><p>{item.name}</p></Link>
                        
                    </div>
                    <div>
                        <button id="quantity-button" onClick={() => {
                            this.props.decreaseProductQuantity(item)
                        }}>-</button>
                        {item.quantity}
                        <button id="quantity-button" onClick={() => {
                            this.props.increaseProductQuantity(item)
                        }}>+</button>
                        <button id="quantity-button" onClick={() => {
                            this.props.removeProduct(item)
                        }}>Remove Product</button>
                    </div>
                </li>
            )
        });

        let subtotal = 0;
        let totalQuantity = 0;
        for (let i = 0; i < this.props.cartItems.length; i++) {
            const item = this.props.cartItems[i];
            subtotal += item.onSale ? item.price * 0.85 : item.price;
            subtotal *= item.quantity;
            totalQuantity += item.quantity;
        }
        const total = intToFloat(subtotal + 0.0625 * subtotal + 3, 2);
        subtotal = intToFloat(subtotal, 2);
        const tax = intToFloat(0.0625 * subtotal, 2);
        const shipping = intToFloat(3, 2);

        return (
            <>
                <div className="cart-page">
                    <div className="cart-left">
                        <h2>Your Items</h2>
                        {items.length ? <ul className="cart-items">
                            {items}
                            {items.length ? <button id="quantity-button" onClick={() => this.props.clearCart()}>Clear All</button> : null }
                        </ul> : (<div className="no-items-cart">No Items! <Link to="/">Browse Items Here</Link></div>)}
                    </div>
                    <div className="cart-right">
                        <section className={items.length ? "order-summary" : "order-summary-hidden"}>
                            <h3>Order Summary</h3>
                            <p><strong>Total Items</strong>: {totalQuantity}</p>
                            <p><strong>Subtotal</strong>: ${subtotal}</p>
                            <p><strong>Tax</strong>: ${tax}</p>
                            <p><strong>Shipping</strong>: ${shipping}</p>
                            <p><strong>Total</strong>: ${total}</p>
                            <button onClick={this.handlePurchase}>Purchase</button>
                        </section>
                    </div>
                </div>

                {this.state.purchaseModal ? <div className="modal-background">
                    <div className="modal-inner">
                        <Confirmation total={total} totalQuantity={totalQuantity}/>
                        <Link to="/"><button onClick={() => this.props.clearCart()}>Done</button></Link>
                    </div>
                </div> : null}
            </>
        )
    }
}


const msp = (state) => ({
    cartItems: state.cart.products,
})

const mdp = (dispatch) => ({
    removeProduct: data => dispatch(removeProduct(data)),
    increaseProductQuantity: data => dispatch(increaseProductQuantity(data)),
    decreaseProductQuantity: data => dispatch(decreaseProductQuantity(data)),
    clearCart: () => dispatch(clearCart())
})

export default connect(msp, mdp)(Cart);