import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { PageLayout } from "./PageLayout";

class SolidityPage extends Component {
	render() {
		return (
			<div>
				<Header as='h1'>Solidity</Header>
				<div className="test1">test1</div>
				<div className="Basics">test2</div>
				<div className="test3">test3</div>
			</div>
		);
	}
}

export default PageLayout(SolidityPage);