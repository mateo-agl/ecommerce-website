import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/reducers/appReducer';
import { showMenu } from '../../redux/reducers/headerReducer';

export const Navbar = ({ categories, category }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch({ type: "GET_CATEGORIES" }), []);
	return (
		<nav id="navbar">
			{
				categories.map((obj, i) => (
					<label 
						className={
							obj.name === category
								? 'nav-item btn active'
								: 'nav-item btn'
						}
						key={i}
						onClick={e => {
							dispatch(changeCategory(e.target.textContent));
							dispatch(showMenu());
						}}
					>
						{ obj.name }
					</label>
				))
			}
		</nav>
	);
};
