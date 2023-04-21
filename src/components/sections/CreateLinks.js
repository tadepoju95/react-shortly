import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import{ createLinks, fetchLink} from '../../actions';



const CreateLinks = ({link, createLinks}) => {



	useEffect(() => {
		if(link !== [] && link.original_link && link.short_link2) {
			createLinks(link.original_link, link.short_link2);
		}
    
  }, [link]);

	return (
		<div>
			<div></div>
		</div>
	)

}
	const mapStateToProps = state => {
		return {
			link: state.shortenLink
		};
	}


export default connect(mapStateToProps, {createLinks, fetchLink})(CreateLinks);