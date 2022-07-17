import React from 'react';
import Form from './Form';



const SecondSection = () => {

	return(
		<main>
			<section className="second_section text-center">
				<div className="container second_section-container">
					<Form />
					<div className="second_section-header-text">
						<h2>Advanced Statistics</h2>
						<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
					</div>
					<div className="second_section-header-text-first-box">
						<span className="circle"><img className="circle-icon" src="images/icon-brand-recognition.svg" alt="recognition icon"/></span>
						<div className="second_section-header-text-box">
							<h5>Brand Recognition</h5>
							<p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
						</div>
					</div>
					<div className="vertical-line"></div>
					<span className="circle"><img className="circle-icon" src="images/icon-detailed-records.svg" alt="recognition icon"/></span>
					<div className="second_section-header-text-box">
						<h5>Detailed Records</h5>
						<p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
					</div>
					<span className="circle"><img className="circle-icon" src="images/icon-fully-customizable.svg" alt="recognition icon"/></span>
					<div className="second_section-header-text-box">
						<h5>Fully Customizable</h5>
						<p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
					</div>
				</div>
			</section>
		</main>
	)
}


export default SecondSection;