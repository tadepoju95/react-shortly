import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection';
import Form from './sections/Form';

const Home = () => {
	return (
		<div> 
			<Header />
			<FirstSection />
			<Form />
			<SecondSection />
		</div>
	)
}

export default Home;