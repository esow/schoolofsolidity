import React, { Component } from "react";
import { PageLayout } from "./PageLayout";

class HomePage extends Component {
	render() {
		return (
			<div>
				This is the homepage!
			</div>
		);
	}
}

export default PageLayout(HomePage);