import React, { useEffect, useState } from 'react';
import Terminal from './Components/Terminal';
import Typist from 'react-typist';

const App = () => {
	const names = ['Codrut.', 'a Web Developer.', 'a Student.', 'self-taught.'];
	const [finish, setFinish] = useState(true);

	useEffect(() => {
		setFinish(true);
	}, [finish]);

	return (
		<div className="container mx:auto px-4 pt-28 h-screen">
			<h1 className="text-pink text-7xl text-center flex flex-column justify-center">
				Hello, I'm&nbsp;
				{finish ? (
					<Typist avgTypingDelay={100} onTypingDone={() => setFinish(false)}>
						{names.map((name, index) => (
							<span key={index}>
								<span>{name}</span>
								<Typist.Backspace count={name.length} delay={500} />
							</span>
						))}
					</Typist>
				) : (
					''
				)}
			</h1>
			<Terminal />
		</div>
	);
};

export default App;
