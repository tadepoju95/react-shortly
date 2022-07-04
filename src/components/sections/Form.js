import React from 'react';


class Form extends React.Component {
	state = { onHover: ''};

	
  	onButtonHover = () => {
    	this.setState({onHover: '0.6'});
  	};

  	noHover = () => {
    	this.setState({onHover: ''});
  	};
	
	renderForm() {
		return (
				<div id="input-group" className="mb-3 d-flex flex-column">
		  			<input type="text" className="form-control" placeholder="Shorten a link here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
	    			<button className="btn" type="button" id="button-addon2" style={{opacity: this.state.onHover}} onMouseEnter={this.onButtonHover} onMouseLeave={this.noHover}>Shorten It!</button>
	  			</div>
		)
	}

	
	render() {
		return (
			<div className="form">
				<div className="form-input" style={{backgroundImage: 'url("/images/bg-shorten-desktop.svg")', backgroundRepeat: 'no-repeat',   backgroundSize: 'cover'}}>
					{this.renderForm()}
				</div>
			</div>
		)
	}

}

export default Form;