import React from 'react';
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav className="justify-content-end" style={{ width: "100%" }}>
		<NavMenu>
			<NavBtn>
				<NavBtnLink to='/app/ipr'>App</NavBtnLink>
			</NavBtn>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
