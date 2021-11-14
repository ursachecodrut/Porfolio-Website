import React from 'react';
import TerminalBody from './TerminalBody';

const Terminal = () => {
	return (
		<div className="grid-cols-1 w-screen px-10 my-10" id="Terminal">
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
			<TerminalBody />
		</div>
	);
};

export default Terminal;
