import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from "../../actions/cart_actions";

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleAddToCart() {
        this.props.addProduct(this.props.item);
        this.setState({ modal: true });
    }

    closeModal() {
        this.setState({ modal: false });
    }

    render() {
        const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);
        const price = intToFloat(this.props.item.price, 2);
        const discountAvail = this.props.item.onSale;
        const discountedPrice = intToFloat(price * 0.85, 2);

        return (
            <>
                <div className="item-show-container">
                    <div className="item-show-page">
                        <div className="image-container">
                            <img src={this.props.item.image} />
                        </div>
                        <div className="item-info-container">
                            <h3>{this.props.item.name}</h3>
                            <p><strong>Traits:</strong> {this.props.item.description}</p>
                            <p><strong>SKU:</strong> {this.props.item.sku}</p>
                            <p><strong>Inventory:</strong> {this.props.item.inventory}</p>
                            {discountAvail ? <p className="on-sale-now">On Sale Now!</p> : null}
                            <p className="item-price">
                                <span className={discountAvail ? "strikeout" : ""}>{`$${price}`}</span>
                                <span className="discount-price">{discountAvail ? ` $${discountedPrice}` : ""}</span>
                            </p>
                        </div>
                        
                        <button className="add-to-cart-btn" onClick={this.handleAddToCart}>Add To Cart</button>
                    </div>
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

const msp = (state, ownProps) => {
    return {
        item: state.items[ownProps.match.params.item.toLowerCase()]
    };
}

const mdp = dispatch => ({
    addProduct: data => dispatch(addProduct(data))
})

export default connect(msp, mdp)(ItemShow);