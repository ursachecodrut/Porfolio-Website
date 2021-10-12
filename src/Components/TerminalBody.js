import React, { useState } from 'react';
import { TreeNode, NodesArray } from '../utils/dirsTree';

const TerminalBody = () => {
	const [workingDir, setWorkingDir] = useState('~');
	const [dirsTree, setDirsTree] = useState({
		'~': {
			Projects: {
				files: [],
				dirs: {
					Draw2HTML: {
						files: ['./open.sh', 'about.txt'],
						dirs: {},
					},
					WeatherApp: {
						files: ['./open.sh', 'about.txt'],
						dirs: {},
					},
				},
			},
			About: {
				files: ['about.txt'],
				dirs: {},
			},
		},
	});

	const [currentCommand, setCurrentCommand] = useState('');
	const [commandHistory, setCommandHistory] = useState([]);

	const runCommand = (inputValue) => {
		let id;

		if (commandHistory.length !== 0) {
			id = commandHistory[commandHistory.length - 1].id + 1;
		} else {
			id = 0;
		}

		if (inputValue.startsWith('cd')) {
			let folder = inputValue.split(' ')[1];
			console.log('folder to cd in ', folder);
			let pathArray = workingDir.split('/');
			console.log('pathArray ', pathArray);
			let lastDir = pathArray[pathArray.length - 1];
			console.log(lastDir);

			// for (let item in dirsTree) {
			// 	console.log(item);
			// 	console.log(Object.keys(dirsTree[item]));
			// 	let keys = Object.keys(dirsTree[item]);
			// 	for (let key in keys) {
			// 		console.log(keys[key]);
			// 	}
			// }

			console.log(NodesArray);

			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este cd',
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'ls') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este ls',
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'cat') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este cat',
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'mkdir') {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'este mkdir',
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'clear') {
			let newArray = [];
			setCommandHistory(newArray);
		} else if (!/\S/.test(inputValue)) {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: '',
				id: id,
			});
			setCommandHistory(newArray);
		} else {
			let newArray = commandHistory.concat({
				command: inputValue,
				result: 'Command Not Found',
				id: id,
			});
			setCommandHistory(newArray);
		}
	};

	return (
		<div
			className="bg-background rounded-b-xl h-96 p-4 overflow-y-auto"
			id="TerminalBody"
		>
			{commandHistory.map((x) => (
				<div key={x.id}>
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
					autoFocus
				/>
			</div>
		</div>
	);
};

export default TerminalBody;
