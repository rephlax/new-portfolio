import { useState } from "react";
import "./App.css";
import DraggableTest from "./components/DraggableTest/DraggableTest";
import MacOSWindow from "./components/MacOS/MacOSWindow/MacOSWindow";

function App() {
	return (
		<>
			<div>
				<MacOSWindow />
			</div>
		</>
	);
}

export default App;
