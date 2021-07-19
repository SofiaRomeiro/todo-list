import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const trashButton = ({ clearDone }) => {
  
	return (
	  	<div>
			Delete:
			<IconButton aria-label="delete" style={{color:"#F86060", marginBottom:"5px"}} onClick={() => clearDone()}>
        		<DeleteIcon fontSize="medium"/>
        	</IconButton>
		</div>
	)}

export default trashButton;