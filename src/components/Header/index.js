import './index.css'
import { Navbar, Nav } from 'react-bootstrap'

export default () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/" className="header">
                <img src="/images/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">VISUALIZATION</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}