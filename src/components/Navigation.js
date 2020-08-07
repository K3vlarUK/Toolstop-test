import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <NavLink to="/">Top 40</NavLink>
            <NavLink to="/categories">Categories</NavLink>
        </div>
     );
}
 
export default Navigation;