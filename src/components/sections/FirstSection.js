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
	<section className="first_Section text-center">
      <div className="container d-flex flex-column-reverse">
        <div className="firstSection-text-button">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button
              className="btn get-started-btn rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#enroll" style={styles} onMouseEnter={onButtonHover} onMouseLeave={noHover}>
              Get Started
          </button>
        </div>
          <img className="working-illustration" src="images/illustration-working.svg" alt="person at computer working"/>
      </div>
  </section>
);


}

export default FirstSection;

