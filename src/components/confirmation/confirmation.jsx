import React from 'react';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="confirmation-page">
                <h1>Your purchase was successful!</h1>
                <div className="confirmation-summary">
                    <h2>Order Summary</h2>
                    <p>Total Items: {this.props.totalQuantity}</p>
                    <p>Total Price: ${this.props.total}</p>
                </div>
            </div>
        )
    }
}

export default Confirmation;