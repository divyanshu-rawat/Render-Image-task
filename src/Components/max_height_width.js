


import React from 'react';
import ReactDOM from 'react-dom';


export const MaxHeightWidth = (props) => {
	return(
		<div className = "">
			<form className="form-inline _margin_top"> 
	            <div className="form-group">
			      <label htmlFor="height">maxImageHeight:</label>
			      <input type="text" className="form-control" onChange = {props.handle_height_change} />
			    </div>

			    <div className="form-group _margin_">
			      <label htmlFor="width">maxImageWidth :</label>
			      <input type="text" className="form-control" onChange = {props.handle_width_change}/>
			    </div>
			</form>
       </div>
	)
}