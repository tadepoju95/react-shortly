import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchAllLinks} from '../../actions';
import ListLink from './ListLink';




const ListLinks = ({fetchAllLinks, links}) => {

	
	
	
	useEffect(() =>{
		fetchAllLinks();

			
	}, [])

	
	const renderedLinks = links.map((link, index) => {
		return (

			<ListLink key={link.id} originLink={link.link1} shortLink={link.link2} index={index} id={link.id} />

		)
	});



	return ( 
		<div className= "list-of-links d-flex flex-column">
		{renderedLinks}
		</div>
	)

}

const mapStateToProps = state => {
	return {
		links: Object.values(state.theLinks)
	};
}


export default connect(mapStateToProps, {fetchAllLinks})(ListLinks);