import React from 'react';
import Terminal from './Components/Terminal';

const App = () => {
	return (
		<div className="container mx:auto px-4 pt-28 h-screen">
			<h1 className="text-green text-7xl text-center">
				Hello, My name is Codrut!
			</h1>
			<Terminal />
		</div>
	);
};

export default App;
