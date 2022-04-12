import {React, useState} from "react";
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

import { Link } from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';

function Navbar() {

	const {showLinks, setShowLinks} = useState(false);

	function click(){
		setShowLinks(!showLinks);
	}

	return (
		<div className="navbar">
			<div className="leftSide" id={showLinks ? 'open' : 'close'}>
				<img src={logo} />
				<div className="hiddenLinks">
					<Link to='/'>Home</Link>
					<Link to='/menu'>Menu</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</div>
			
			<div className="rightSide">
				<Link to='/'>Home</Link>
				<Link to='/menu'>Menu</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<button>
					<TocIcon />
				</button>
			</div>
		</div>
	);
}

export default Navbar;
