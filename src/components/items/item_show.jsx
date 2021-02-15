import React from 'react';
import { connect } from 'react-redux';
import Inventory from '../../data';
import { addProduct } from "../../actions/cart_actions";

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);
        const price = intToFloat(this.props.item.price, 2);
        const discountAvail = this.props.item.onSale;
        const discountedPrice = intToFloat(price * 0.85, 2);

        return (
            <div className="item-show-page">
                <div className="image-container">
                    <img src={this.props.item.image} />
                </div>
                <div className="item-info-container">
                    <h3>{this.props.item.name}</h3>
                    <p>{this.props.item.description}</p>
                    <p>SKU: {this.props.item.sku}</p>
                    <p className="item-price">
                        <span className={discountAvail ? "strikeout" : ""}>{`$${price}`}</span>
                        <span className="discount-price">{discountAvail ? ` $${discountedPrice}` : ""}</span>
                    </p>
                </div>
                
                <button className="add-to-cart-btn" onClick={() => {
                    this.props.addProduct(this.props.item)
                }}>Add To Cart</button>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        item: state.items[ownProps.match.params.item.toLowerCase()]
    };
}

const mdp = dispatch => ({
    addProduct: data => dispatch(addProduct(data))
})

export default connect(msp, mdp)(ItemShow);