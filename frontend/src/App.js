import "./App.css";

import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
			<p>BIG WORLD!</p>
			<form action="http://18.168.6.68:8000/pdf" method="POST">
				<input type="text" name="name" placeholder="Your name" />
				<textarea placeholder="Tell me about yourself" name="about">
					{" "}
				</textarea>
				<input type="submit" value="Create PDF" />
			</form>
		</div>
	);
}

export default App;
