import React from 'react';


class Form extends React.Component {

	renderForm() {
		return (
				<div id="input-group" className="mb-3 d-flex flex-column flex-md-row">
		  			<input type="text" className="form-control" placeholder="Shorten a link here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
	    			<button className="btn" type="button" id="button-addon2">Shorten It!</button>
	  			</div>
		)
	}

	
	render() {
		return (
			<div className="form">
				<div className="form-input" style={{backgroundImage: 'url("/images/bg-shorten-mobile.svg")', backgroundRepeat: 'no-repeat',   backgroundSize: 'cover', backgroundPosition: 'center'}}>
					{this.renderForm()}
				</div>
			</div>
		)
	}

}

export default Form;