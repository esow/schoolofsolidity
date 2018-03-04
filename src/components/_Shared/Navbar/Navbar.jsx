import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<Menu className="navbar" size="large" fixed="top" borderless>
				<Menu.Item header as={Link} className="solitidy-header" to="/">School Of Solidity</Menu.Item>
				<Menu.Item as={Link} to="/solidity" content="Solidity" />
				<Menu.Item as={Link} to="/contract" content="Contracts" />
				<Menu.Item as={Link} to="/web3" content="Web3" />
				<Menu.Item as={Link} to="/tools" content="Tools" />
				<Menu.Item as={Link} to="/deployment" content="Deployment" />
			</Menu>
		);
	}
}

export default Navbar;