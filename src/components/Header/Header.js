import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">
                    <a className="header"> 
                        <img src={logo} alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">VISUALIZATION</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;


// import React from 'react';
// import logo from '../../images/logo.jpg';
// import './Header.css';

// const Header = () => {
//     return (
//         <div className="header">
//             <img src={logo} alt="" />
//         </div>
//     );
// };

// export default Header;
