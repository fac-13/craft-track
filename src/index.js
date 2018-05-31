import React from "react";
import ReactDOM from "react-dom";
import "../public/style.min.css";

import Title from "./components/title/title";

const App = () => {
	return <Title>hello, world</Title>;
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;