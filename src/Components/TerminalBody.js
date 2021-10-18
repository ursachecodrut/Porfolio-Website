import React, { useState } from 'react';
import { NodesArray } from '../utils/dirsTree';

const TerminalBody = () => {
	const [workingDir, setWorkingDir] = useState('~');

	const [currentCommand, setCurrentCommand] = useState('');
	const [commandHistory, setCommandHistory] = useState([]);

	const runCommand = (inputValue) => {
		let id;

		if (commandHistory.length !== 0) {
			id = commandHistory[commandHistory.length - 1].id + 1;
		} else {
			id = 0;
		}

		//cd is working to single directory path
		if (inputValue.startsWith('cd')) {
			let validCd = 0;
			const previosWorkingDir = workingDir;
			let dirToCDIn = inputValue.split(' ')[1];
			if (dirToCDIn === '..') {
				validCd = 1;
				let lastIndex = workingDir.lastIndexOf('/');
				let wd = workingDir.substr(0, lastIndex);
				setWorkingDir(wd);
			} else {
				let pathArray = workingDir.split('/');
				let lastDir = pathArray[pathArray.length - 1];

				for (let item of NodesArray) {
					if (item.value === lastDir) {
						for (let dir of item.dirs) {
							if (dir.value === dirToCDIn) {
								setWorkingDir(`${workingDir}/${dirToCDIn}`);
								validCd = 1;
							}
						}
					}
				}
			}

			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result:
					validCd === 1 ? '' : `cd: no such file or directory: ${dirToCDIn}`,
				id: id,
			});
			setCommandHistory(newArray);
			//ls working only on current directory
		} else if (inputValue === 'ls') {
			const previosWorkingDir = workingDir;
			let result = '';
			let pathArray = workingDir.split('/');
			let lastDir = pathArray[pathArray.length - 1];

			for (let item of NodesArray) {
				if (item.value === lastDir) {
					for (let dir of item.dirs) {
						result = result.concat(`${dir.value} `);
					}
					for (let file of item.files) {
						result = result.concat(`${file.fileName} `);
					}
				}
			}
			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result,
				id,
			});
			setCommandHistory(newArray);
		} else if (inputValue.startsWith('cat')) {
			const previosWorkingDir = workingDir;
			let result;
			let fileToCat = inputValue.split(' ')[1];

			let pathArray = workingDir.split('/');
			let lastDir = pathArray[pathArray.length - 1];

			for (let item of NodesArray) {
				if (item.value === lastDir) {
					for (let file of item.files) {
						console.log(file);
						if (file.fileName === fileToCat) {
							result = file.fileContent;
						}
					}
				}
			}

			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result,
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'mkdir') {
			const previosWorkingDir = workingDir;

			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result: 'este mkdir',
				id: id,
			});
			setCommandHistory(newArray);
		} else if (inputValue === 'clear') {
			let newArray = [];
			setCommandHistory(newArray);
		} else if (!/\S/.test(inputValue)) {
			const previosWorkingDir = workingDir;

			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result: '',
				id: id,
			});
			setCommandHistory(newArray);
		} else {
			const previosWorkingDir = workingDir;

			let newArray = commandHistory.concat({
				previosWorkingDir,
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
						<span className="text-green">
							codrut@portfolio:
							<span className="text-purple">
								{x.previosWorkingDir}
								<span className="text-foreground">$</span>
							</span>
						</span>

						<span className="text-foreground"> {x.command}</span>
					</div>
					<div className="text-foreground">{x.result}</div>
				</div>
			))}
			<div className="flex">
				<span className="inline-flex text-green">
					<span className="inline">codrut@portfolio:</span>
					<span className="text-purple inline">
						{workingDir}
						<span className="text-foreground">$</span>
					</span>
				</span>
				<input
					type="text"
					className="flex-1 block w-full bg-background text-foreground"
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
