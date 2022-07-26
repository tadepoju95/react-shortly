import React from 'react';
import Header from './Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';

const Home = () => {
	return (
		<div> 
			<Header />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
		</div>
	)
}

export default Home;