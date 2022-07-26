import React, { useState } from 'react';


const FourthSection = () => {
	return (
		<section className="fourth_section text-center">
			<div className="container fourth_section_container">
		  		<img src="/images/logo.svg" alt="Shortly logo" className="shortly-logo" />
		  		<div className="features-list">
		  			<h6>Features</h6>
		  			<ul>
			  			<li>Link Shortening</li>
			  			<li>Branded Links</li>
			  			<li>Analytics</li>
		  			</ul>
		  		</div>
		  		<div className="text-list"> 
		  			<h6>Resources</h6>
		  			<ul>
			  			<li>Blog</li>
			  			<li>Developers</li>
			  			<li>Support</li>
		  			</ul>
		  		</div>
		  		<div className="text-list">
		  			<h6>Company</h6>
		  			<ul>
			  			<li>About</li>
			  			<li>Our Team</li>
			  			<li>Careers</li>
			  			<li>Contact</li>
		  			</ul>
		  		</div>
		  		<div>
		  			<img src="/images/icon-facebook.svg" alt="facebook icon" className="icon-list"/>
		  			<img src="/images/icon-twitter.svg" alt="twitter icon" className="icon-list"/>
		  			<img src="/images/icon-pinterest.svg" alt="pinterest icon" className="icon-list"/>
		  			<img src="/images/icon-instagram.svg" alt="instagram icon" className="icon-list"/>
		  		</div>
			</div>
		</section>
	)
}

export default FourthSection;