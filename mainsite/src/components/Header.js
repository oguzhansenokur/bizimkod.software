import React from 'react'
import { NavItem, NavLink } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>BizimKod.Software</h1>
                </NavLink>
                <NavLink to="/data1">
                    Data1
                </NavLink>
                <NavLink to="/data2">
                    Data2  
                </NavLink>
            </Nav>
        </>
    )
}

export default Header
