import React, { useEffect, useState } from 'react';
import Terminal from './Components/Terminal';
import Typist from 'react-typist';

const App = () => {
	const names = ['Codrut', 'a Web Developer', 'a Student', 'self-taught'];
	const [finish, setFinish] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setFinish(true);
		}, 500);
	}, [finish]);

	return (
		<div className="container mx:auto px-4 pt-28 h-screen">
			<h1 className="text-green text-7xl text-center">
				{finish ? (
					<Typist avgTypingDelay={100} onTypingDone={() => setFinish(false)}>
						Hello, I'm {names[0]}
						<Typist.Backspace count={names[0].length} delay={500} />
						<span>{names[1]}</span>
						<Typist.Backspace count={names[1].length} delay={500} />
						<span>{names[2]}</span>
					</Typist>
				) : (
					"Hello, I'm a Student"
				)}
			</h1>
			<Terminal />
		</div>
	);
};

export default App;
