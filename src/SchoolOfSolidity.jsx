import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/_Shared/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContractPage from "./pages/ContractPage";
import { ContractSections, SoliditySections } from "./sideMenuConfig/sideMenuConfig";
import SolidityPage from "./pages/SolidityPage";

class SchoolOfSolidity extends Component {
	render() {
		return (
			<Router>
				<div className="page-width">
					<Navbar />
					<Route exact path="/" component={HomePage} />
					<Route path="/solidity" render={() => <SolidityPage sections={SoliditySections} />} />
					<Route path="/contract" render={() => <ContractPage sections={ContractSections} />} />
				</div>
			</Router>
		);
	}
}

export default SchoolOfSolidity;