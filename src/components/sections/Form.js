import React from 'react';
import{ shortenLink } from '../../actions';
import { connect } from 'react-redux';


class Form extends React.Component {
	state = { inputValue: "", errorMessage: "", color: ""};


	onSubmit = e => {
		e.preventDefault();
		if(this.state.inputValue !== '') {
			this.props.shortenLink(this.state.inputValue);
		} else {
			this.setState({ errorMessage: "please add a link"});
			this.setState({ color: "hsl(0, 87%, 67%)"})
		}
		this.setState({ inputValue: ""});
	};

	renderForm() {
		return (
				<div id="input-group" className="mb-3 d-flex flex-column flex-md-row">
		  			<input type="text" className="form-control" placeholder="Shorten a link here..." 
		  			aria-label="Recipient's username" aria-describedby="button-addon2" 
		  			value={this.state.inputValue} style={{borderColor: this.state.color}}
		  			onChange={(e) => this.setState({inputValue: e.target.value}, () => {console.log(this.state.inputValue)})} />
	    			<button className="btn" type="submit" id="button-addon2">Shorten It!</button>
	  			</div>

		)
	}

	
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				<div className="form-input" style={{backgroundImage: 'url("/images/bg-shorten-mobile.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
					{this.renderForm()}
					<p className="validation-text">{this.state.errorMessage}</p>
				</div>
			</form>
		)
	}

}

export default connect(null, { shortenLink })(Form);