import React from 'react';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Your purchase was successful!</h1>
                <div>
                    <h4>Order Summary</h4>
                    <p>Total Items: {this.props.totalQuantity}</p>
                    <p>Total Price: ${this.props.total}</p>
                </div>
            </div>
        )
    }
}

export default Confirmation;