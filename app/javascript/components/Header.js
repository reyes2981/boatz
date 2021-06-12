import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <h1>Boatz</h1>
            <NavLink to='/login'>
                <li>login</li>
            </NavLink>
            <NavLink to='/signup'>
                <li>create an account</li>
            </NavLink>
            <NavLink to='/'>
                <li>my rentals</li>
            </NavLink>
            <NavLink to='/rentals/new'>
                <li>rent my boat</li>
            </NavLink>
        </div>
        
    )
}

export default Header;