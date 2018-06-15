import React from "react";
import { Link } from "@reach/router";

const NavLink = ({ updateCurrentPage, addActiveClass, page }) => {
	const Title = {
		"about": "About",
		"log-craft": "Log Craft",
		"tracker": "Tracker",
		"to-be-invoiced": "To Be Invoiced",
	}[page];
	return (<Link onClick={updateCurrentPage(page)} className={"link " + addActiveClass(page)} to="/">{Title}</Link>);
};
export default NavLink;