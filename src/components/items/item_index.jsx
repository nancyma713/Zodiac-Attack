import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addProduct } from '../../actions/cart_actions';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleAddToCart() {
        this.props.addProduct(this.props.data);
        this.setState({ modal: true });
    }

    closeModal() {
        this.setState({ modal: false });
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);
        const price = intToFloat(this.props.data.price, 2);
        const discountAvail = this.props.data.onSale;
        const discountedPrice = intToFloat(price * 0.85, 2);

        return (
            <>
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
                    <button className="add-to-cart-btn" onClick={this.handleAddToCart}>Add To Cart</button>
                </div>

                {this.state.modal ? <div className="modal-background">
                    <div className="add-modal-inner">
                        <p>Added!</p>
                        <button onClick={this.closeModal}>Close</button>
                    </div>
                </div> : null}
            </>
        )
    }
}


const mdp = (dispatch) => ({
    addProduct: data => dispatch(addProduct(data))
})

export default connect(null, mdp)(Item);