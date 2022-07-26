import React, {useState} from 'react';


const ThirdSection = () => {

const [onHover, setOnHover] = useState('');
const [hover, setHover] = useState('');

const styles = {
	opacity: onHover,
	color: hover
};

const onButtonHover = () => {
	setOnHover('0.6');
	setHover('white');
};

const noHover = () => {
	setOnHover('');
	setHover('');
};

return (
	<section className="third_section text-center" style={{backgroundImage: 'url("/images/bg-boost-mobile.svg")', backgroundRepeat: 'no-repeat',   backgroundSize: 'cover', backgroundPosition: 'center'}}>
		<div className="container">
			<div className="third_section_text_button">
          		<h2 className="text-white">Boost your links today</h2>
			    <button
			        className="btn get-started-btn rounded-pill"
			        data-bs-toggle="modal"
			        data-bs-target="#enroll" style={styles} onMouseEnter={onButtonHover} onMouseLeave={noHover}>
			            Get Started
			    </button>
        	</div>
		</div>
	</section>
)

}

export default ThirdSection;