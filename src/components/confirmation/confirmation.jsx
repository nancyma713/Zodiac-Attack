import React from 'react';

class Confirmation extends React.Component {
    render() {
        return (
            <div>
                <h1>Your purchase was successful!</h1>
                <div>
                    <h4>Order Summary</h4>
                    <p>Total Price: </p>
                </div>
            </div>
        )
    }
}

export default Confirmation;