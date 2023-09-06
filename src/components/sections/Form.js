import React from 'react';
import{ fetchLink } from '../../actions';
import { connect } from 'react-redux';


class Form extends React.Component {
	state = { inputValue: "", errorMessage: "", color: "", translate: "", validateMd: "",
			formPadding: "", placeholder: ""};

	onInput = e => {
		e.preventDefault();
			this.setState({ errorMessage: ""});
			this.setState({ color: ""});
			this.setState({ translate: ""});
			this.setState({ validateMd: ""});
			this.setState({ formPadding: ""});
			this.setState({ placeholder: ""});
	}

	onSubmit = e => {
		e.preventDefault();
		if(this.state.inputValue !== '') {
			this.props.fetchLink(this.state.inputValue);
			this.setState({ errorMessage: ""});
			this.setState({ color: ""});
			this.setState({ translate: ""});
			this.setState({ validateMd: ""});
			this.setState({ formPadding: ""});
			this.setState({ placeholder: ""});
		} else {
			this.setState({ errorMessage: "please add a link"});
			this.setState({ color: "hsl(0, 87%, 67%)"});
			this.setState({ translate: "translateY(-1.9em)"});
			this.setState({ validateMd: "validateMd"});
			this.setState({ formPadding: "formPadding"});
			this.setState({ placeholder: "color"});
		}
		this.setState({ inputValue: ""});
	};

	renderForm() {
		return (
				<div id="input-group" className={"mb-3 d-flex flex-column flex-md-row " + this.state.validateMd}>
		  			<input type="text" className={"form-control " + this.state.placeholder} placeholder="Shorten a link here..." 
		  			aria-label="Recipient's username" aria-describedby="button-addon2" 
		  			value={this.state.inputValue} style={{borderColor: this.state.color, transform: this.state.translate}}
		  			onChange={(e) => this.setState({inputValue: e.target.value}, () => {console.log(this.state.inputValue)})} />
	    			<button className="btn" type="submit" id="button-addon2">Shorten It!</button>
	  			</div>

		)
	}

	
	render() {
		return (
			<form className={"form " + this.state.formPadding} onInput={this.onInput} onSubmit={this.onSubmit}>
				<div className="form-input" style={{backgroundImage: 'url("/images/bg-shorten-mobile.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
					<p className="validation-text">{this.state.errorMessage}</p>
					{this.renderForm()}
				</div>
			</form>
		)
	}

}



export default connect(null, { fetchLink})(Form);