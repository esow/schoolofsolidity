import React from "react";
import "./PageStyles.css";
import SideMenu from "../components/_Shared/SideMenu/SideMenu";

export const PageLayout = (WrappedComponent) => {
	class Wrapper extends React.PureComponent {
		render() {
			return (
				<div className="page-layout">
					<SideMenu {...this.props} />
					<div className="page-content"><WrappedComponent /></div>
				</div>
			);
		}
	}
	return Wrapper;
};
