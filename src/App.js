import React, { useEffect, useState } from 'react';
import Terminal from './Components/Terminal';
import Typist from 'react-typist';

const App = () => {
	const sentences = [
		'Hello, my name is Codrut.',
		"I'm a Web Developer.",
		"I'm a Student at UPB, Romania.",
		'I love React and Javascript!',
	];

	const [finish, setFinish] = useState(true);

	useEffect(() => {
		setFinish(true);
	}, [finish]);

	return (
		<div className="container mx:auto px-4 pt-28 h-screen">
			<h1 className="text-green text-7xl text-center flex justify-center">
				{finish ? (
					<Typist avgTypingDelay={100} onTypingDone={() => setFinish(false)}>
						{sentences.map((item, index) => (
							<span key={index}>
								<span>{item}</span>
								<Typist.Backspace count={item.length} delay={500} />
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
