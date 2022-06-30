import React, {useState} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';



const Header = () => {
	const [onHover, setOnHover] = useState('');


	const styles = {
	   opacity: onHover
	};

	const onButtonHover = () => {
	   setOnHover('0.6');
	};

	const noHover = () => {
	    setOnHover('');
	};
		
	
	return (
		<Navbar collapseOnSelect expand="md" fixed="top">
		  <Container>
		  <Navbar.Brand href="#home">
		  	<img src="/images/logo.svg" alt="Shortly-logo" />
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav" className="navbarForMobile">
		    <Nav className="me-auto">
		      <Nav.Link href="#features" className="nav-item">Features</Nav.Link>
		      <Nav.Link href="#pricing" className="nav-item">Pricing</Nav.Link>
		      <Nav.Link href="#pricing" className="nav-item">Resources</Nav.Link>
		    </Nav>
		    <hr />
		    <Nav className="nav-right-links">
		      <Nav.Link href="#deets" className="nav-item secondary-nav-item">Login</Nav.Link>
		      <Nav.Link href="#memes" className="signup-linkColor" style={styles} onMouseEnter={onButtonHover} onMouseLeave={noHover}>Sign Up</Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		  </Container>
		</Navbar>
	);
}

export default Header;