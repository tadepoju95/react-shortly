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
			<div class="input-group mb-3">
	  			<input type="text" class="form-control" placeholder="Shorten a link here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
	  			<button class="btn" type="button" id="button-addon2" style={{opacity: this.state.onHover}} onMouseEnter={this.onButtonHover} onMouseLeave={this.noHover}>Shorten It!</button>
			</div>
		)
	}

	
	render() {
		return (
			<div className="container">
				<div className="d-flex url-input-div" style={{width: '95%', backgroundImage: 'url("/images/bg-shorten-desktop.svg")', backgroundRepeat: 'no-repeat',   backgroundSize: 'cover'}}>
					{this.renderForm()}
				</div>
			</div>
		)
	}

}

export default Form;