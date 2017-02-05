import React from 'react'

import {Link} from '../router'

export const Footer = () => {
	return (
		<div className="footer-links">
			<Link to='/'>All</Link>
			<Link to='/active'>Active</Link>
			<Link to='/complete'>Completed</Link>
		</div>
	)
}