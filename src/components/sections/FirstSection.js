import React, {useState} from 'react';


const FirstSection = () => {
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
	<section
      className="firstSection text-center text-sm-start"
    >
      <div className="container first-section-container">
        <div className="d-flex flex-md-row flex-column-reverse align-items-center firstSection-text-image">
          <div className="firstSection-text-btn">
            <h1 className="first-section-header">More than just shorter links</h1>
            <p className="first-section-paragraph">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <button
              className="btn get-started-btn rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#enroll" style={styles} onMouseEnter={onButtonHover} onMouseLeave={noHover}>
              Get Started
            </button>
          </div>
          <img
            className="working-illustration"
            src="images/illustration-working.svg"
            alt="working"
          />
        </div>
      </div>
    </section>
);
}

export default FirstSection;

