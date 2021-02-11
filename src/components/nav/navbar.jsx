import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div className='nav-container'>
                <div className='home'><Link to='/'><h1>Woooow Cow</h1></Link></div>
                <div className='links'>
                    <Link to='/cart'>
                        <span className="nav-link">My Cart</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar