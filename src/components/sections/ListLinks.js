import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import{ fetchLink } from '../../actions';



const ListLinks = (shortenLink) => {

	return (
		<div>
			<div>{shortenLink.shortenLink}</div>
		</div>
	)

}
	const mapStateToProps = state => {
		return {
			shortenLink: state.shortenLink
		};
	}


export default connect(mapStateToProps, {fetchLink})(ListLinks);