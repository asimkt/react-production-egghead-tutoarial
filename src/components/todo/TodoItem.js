import React from 'react'

import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
	const handleChange = partial(props.handleToggle, props.id)
	const handleRemove = partial(props.handleRemove, props.id)
	return (
		<li key={props.id}>
		  <span className="remove-item">
		  	<a href="#" onClick={handleRemove}>X</a>
		  </span>
	      <input type="checkbox"
			onChange={handleChange}
		    checked={props.isComplete}/>
	      {props.name}
	    </li>
	)
}

TodoItem.propTypes = {
	id: React.PropTypes.number.isRequired,
	isComplete: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired
}