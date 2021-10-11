import React, { useState, useEffect } from 'react';

const Terminal = () => {
	const [workingDirectory, setWorkingDirectory] = useState('~');
	const [currentCommand, setCurrentCommand] = useState('');
	const [commandHistory, setCommandHistory] = useState([]);

	const runCommand = (inputValue) => {
		if (inputValue === 'cd') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este cd',
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'ls') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este ls',
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'cat') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este cat',
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'mkdir') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este mkdir',
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'clear') {
			let newArray = [];
			setCommandHistory(newArray);
		} else if (!/\S/.test(inputValue)) {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: '',
			});
			setCommandHistory(newArray);
		} else {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'Command Not Found',
			});
			setCommandHistory(newArray);
		}
	};

	return (
		<div className="grid-cols-1 my-10" id="Terminal">
			<div
				className="bg-terminalBar text-white rounded-t-xl px-4 h-14 flex flex-wrap content-center justify-between"
				id="TerminalBar"
			>
				<div className="flex gap-4" id="buttons">
					<div className="bg-red rounded-full h-5 w-5 flex items-center justify-center"></div>
					<div className="bg-yellow rounded-full h-5 w-5 flex items-center justify-center"></div>
					<div className="bg-green rounded-full h-5 w-5 flex items-center justify-center"></div>
				</div>
				<div className="" id="search">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="bg-background rounded-b-xl h-80 p-4" id="TerminalBody">
				{commandHistory.map((x) => (
					<div>
						<div>
							<span className="text-green">codrut@portfolio:~</span>
							<span className="text-purple">{x.command}</span>
						</div>
						<div className="text-foreground">{x.result}</div>
					</div>
				))}
				<div className="flex">
					<span className="flex-initial text-green">codrut@portfolio:~</span>
					<input
						type="text"
						className="bg-background text-foreground flex-initial w-full"
						onChange={(e) => setCurrentCommand(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								runCommand(e.target.value);
								e.target.value = '';
							}
						}}
						autofocus
					/>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
