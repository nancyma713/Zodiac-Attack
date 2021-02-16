import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addProduct } from '../../actions/cart_actions';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);
        const price = intToFloat(this.props.data.price, 2);
        const discountAvail = this.props.data.onSale;
        const discountedPrice = intToFloat(price * 0.85, 2);

        return (
            <div className="animal-card">
                <Link to={`/${this.props.data.sku}/${this.props.data.name}`}>
                    <img src={this.props.data.image} className="item-img" />
                </Link>
                <Link to={`/${this.props.data.sku}/${this.props.data.name}`}>
                    <h4 className="item-name">{this.props.data.name}</h4>
                </Link>
                <p className="item-price">
                    <span className={discountAvail ? "strikeout" : ""}>{`$${price}`}</span>
                    <span className="discount-price">{discountAvail ? ` $${discountedPrice}` : ""}</span>
                </p>
                <button className="add-to-cart-btn" onClick={() => {
                    this.props.addProduct(this.props.data)
                }}>Add To Cart</button>
            </div>
        )
    }

}


const mdp = (dispatch) => ({
    addProduct: data => dispatch(addProduct(data))
})

export default connect(null, mdp)(Item);