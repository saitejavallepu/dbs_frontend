import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./Navbarstyle.css"
//import logo from './images/logo.svg';
function Navigationbar() {
    
        return (
            
        
        /* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */
        <div className="nav-style">
            
            <Nav className="me-auto">
                <div className="rig">
                    <br/>

            <Link to="/dashboard"><button className='b1'>Dashboard</button></Link> &nbsp; &nbsp;
            <Link to="/transaction"><button className='b1'>Add Transaction</button></Link> &nbsp;&nbsp;
            <Link to="/listtransaction"><button className='b1'>Transaction list</button></Link> &nbsp;&nbsp;
           
            </div>
            <div >
                <br/>
            <Link to="/" ><button className='b1' >Logout</button></Link>&nbsp;&nbsp;
            </div>
        </Nav>
        </div>
      
            
        )
    
}

export default Navigationbar;
