import React from 'react'

export const TodoForm = (props) => (
	<form className="Todo-App">
          <input type="text"
	          value={props.currentTodo}
	          onChange={props.handleInputChange}/>
	</form>
)