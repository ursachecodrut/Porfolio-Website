import React, { useState, useRef } from 'react';
import { NodesArray } from '../utils/dirsTree';

const TerminalBody = () => {
	const [workingDir, setWorkingDir] = useState('~');
	const [commandHistory, setCommandHistory] = useState([]);

	const terminalBody = useRef(null);

	const runCommand = (inputValue) => {
		let id;
		let result = '';

		if (commandHistory.length !== 0) {
			id = commandHistory[commandHistory.length - 1].id + 1;
		} else {
			id = 0;
		}

		//cd is working to single directory path
		if (inputValue === 'clear') {
			let newArray = [];
			setCommandHistory(newArray);
		} else {
			if (inputValue.startsWith('cd')) {
				let validCd = 0;
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

				result =
					validCd === 1 ? '' : `cd: no such file or directory: ${dirToCDIn}`;
			} else if (inputValue === 'ls') {
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
			} else if (inputValue.startsWith('cat')) {
				let validCat = 0;
				let fileToCat = inputValue.split(' ')[1];

				let pathArray = workingDir.split('/');
				let lastDir = pathArray[pathArray.length - 1];

				for (let item of NodesArray) {
					if (item.value === lastDir) {
						for (let file of item.files) {
							if (file.fileName === fileToCat) {
								result = file.fileContent;
								validCat = 1;
							}
						}
					}
				}

				result = validCat === 1 ? result : `cat: no such file: ${fileToCat}`;
			} else if (inputValue.startsWith('./') && inputValue.endsWith('.sh')) {
				let validScript = 0;
				let projectScript = inputValue.substr(2, inputValue.length);

				let pathArray = workingDir.split('/');
				let lastDir = pathArray[pathArray.length - 1];

				for (let item of NodesArray) {
					if (item.value === lastDir) {
						for (let file of item.files) {
							if (file.fileName === projectScript) {
								result = `open ${file.fileContent}`;
								window.open(file.fileContent, '_blank');
								validScript = 1;
							}
						}
					}
				}

				result = validScript === 1 ? result : `no such file: ${projectScript}`;
			} else if (!/\S/.test(inputValue)) {
				result = '';
			} else {
				result = 'Command Not Found';
			}

			const previosWorkingDir = workingDir;

			let newArray = commandHistory.concat({
				previosWorkingDir,
				command: inputValue,
				result,
				id: id,
			});

			setCommandHistory(newArray);
		}
	};

	function updateScroll() {
		terminalBody.current.scrollTop = terminalBody.current.scrollHeight;
	}

	return (
		<div
			className="bg-background rounded-b-xl h-96 px-4 pt-4 pb-16 overflow-y-auto"
			id="TerminalBody"
			ref={terminalBody}
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
					className="flex-1 block w-full bg-background text-foreground outline-none"
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							runCommand(e.target.value);
							e.target.value = '';
							updateScroll();
						}
					}}
					autoFocus={true}
					onBlur={({ target }) => target.focus()}
					// ref={(input) => input && input.focus()}
				/>
			</div>
		</div>
	);
};

export default TerminalBody;
