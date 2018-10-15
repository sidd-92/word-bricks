import React, { Component } from "react";
import RoundTable from "./Components/RoundTable/RoundTable";
import WordWall from "./Components/WordWall/WordWall";
import "./App.css";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<RoundTable />
				<WordWall />
			</React.Fragment>
		);
	}
}

export default App;
