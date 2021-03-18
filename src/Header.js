import { Avatar, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';
function Header() {
	return (
		<div className="header">
			<div className="header_left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					// className="header_left_img"
					src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
					alt="Gmail Logo"
				/>
			</div>
			<div className="header_middle">
				<SearchIcon />
				<input type="text" name="search" value="" placeholder="Search Here" />
				<ArrowDropDownIcon className="header_inputcaret" />
			</div>
			<div classsName="header_right">
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<IconButton>
					<Avatar />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
