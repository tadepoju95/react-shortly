import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import{ createLinks, fetchLink} from '../../actions';



const CreateLinks = ({link, createLinks}) => {


	
	useEffect(() => {
		if(link !== [] && link.original_link && link.full_short_link2) {
			createLinks(link.original_link, link.full_short_link2);
		}
    
  }, [link, createLinks]);

  
	
	return (
		<div>
			
		</div>
	)

}

const mapStateToProps = state => {
	return {
		link: state.shortenLink
	};
}


export default connect(mapStateToProps, {createLinks, fetchLink})(CreateLinks);


