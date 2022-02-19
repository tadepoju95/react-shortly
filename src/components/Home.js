import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection';

const Home = () => {
	return (
		<div> 
			<Header />
			<FirstSection />
			<SecondSection />
		</div>
	)
}

export default Home;