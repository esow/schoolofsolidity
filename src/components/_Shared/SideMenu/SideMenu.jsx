import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import { Link as ScrollLink } from "react-scroll";

class SideMenu extends Component {
	render() {
		return (
			<Menu className="side-menu" size="large" vertical fixed="top">
				{
					this.props.sections.map((section, index) => (
						<Menu.Item key={index}>
							<Menu.Header as={ScrollLink} to={section.header} offset={-50} className="item header-link">
								<Icon name='pointing left' />
								{section.header}
							</Menu.Header>
							<Menu.Menu>
								{
									section.subMenus.map((submenu, index) => (
										<Menu.Item key={index} as={Link} to={submenu.linkTo} name={submenu.subHeader} />
									))
								}
							</Menu.Menu>
						</Menu.Item>
					))
				}
			</Menu>
		);
	}
}

SideMenu.defaultProps = {
	sections: []
};

SideMenu.propTypes = {
	sections: propTypes.arrayOf(propTypes.shape({
		header: propTypes.string.isRequired,
		subMenus: propTypes.arrayOf(propTypes.shape({
			subHeader: propTypes.string.isRequired,
			linkTo: propTypes.string.isRequired
		}))
	})).isRequired
};

export default SideMenu;

