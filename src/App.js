import React, { useEffect, useState } from 'react';
import Terminal from './Components/Terminal';
import Typist from 'react-typist';

const App = () => {
	const sentences = [
		'Hello, my name is Codruț.',
		"I'm a Web Developer.",
		"I'm a CS Student at UPB, Romania.",
		'I love React and Javascript! <3',
	];

	const [finish, setFinish] = useState(true);

	useEffect(() => {
		setFinish(true);
	}, [finish]);

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div>
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
				<div className="text-white font-extralight text-2xl text-center text-opacity-50 my-10">
					Type <span className="font-semibold">help</span> for displaying all
					commands available.
				</div>
				<Terminal />
			</div>
		</div>
	);
};

export default App;
