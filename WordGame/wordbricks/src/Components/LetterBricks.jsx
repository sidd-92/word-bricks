import React from "react";
//import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const LetterBricks = props => {
	return (
		<p>
			<Avatar style={{ backgroundColor: "#6D4C41" }}>{props.letter}</Avatar>
		</p>
	);
};

export default LetterBricks;
