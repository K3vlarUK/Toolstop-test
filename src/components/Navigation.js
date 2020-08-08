import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="nav-bar">
            <NavLink to="/" className="nav-button">Power Tools</NavLink>
            <NavLink to="/" className="nav-button">Hand Tools</NavLink>
            <NavLink to="/" className="nav-button">Accessories</NavLink>
            <NavLink to="/" className="nav-button">Equipment</NavLink>
            <NavLink to="/" className="nav-button">Brands</NavLink>
            <NavLink to="/" className="nav-button">Clearance</NavLink>
            <NavLink to="/" className="nav-button">Special Offers</NavLink>
        </div>
     );
}
 
export default Navigation;