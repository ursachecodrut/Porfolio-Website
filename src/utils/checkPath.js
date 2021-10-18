// export class TreeNode {
// 	constructor(value) {
// 		this.value = value;
// 		this.parent = null;
// 		this.dirs = [];
// 		this.files = [];
// 	}

// 	addDir(dirname) {
// 		const child = new TreeNode(dirname);
// 		this.dirs.push(child);
// 		child.parent = this.value;
// 		return child;
// 	}

// 	addFile(filename) {
// 		this.files.push(filename);
// 	}
// }

// const Root = new TreeNode('~');

// const Projects = Root.addDir('Projects');
// const About = Root.addDir('About');
// About.addFile('aboutme.txt');

// const Draw2HTML = Projects.addDir('Draw2HTML');
// Draw2HTML.addFile('openProject.sh');
// Draw2HTML.addFile('aboutProject.txt');

// const WeatherApp = Projects.addDir('WeatherApp');
// WeatherApp.addFile('openProject.sh');
// WeatherApp.addFile('aboutProject.txt');

// const SmartMirror = Projects.addDir('SmartMirror');
// SmartMirror.addFile('openProject.sh');
// SmartMirror.addFile('aboutProject.txt');

// export const NodesArray = [
// 	Root,
// 	Projects,
// 	About,
// 	Draw2HTML,
// 	WeatherApp,
// 	SmartMirror,
// ];

// const checkPath = (workingDir, input, nodesArray) => {
// 	const wdArray = workingDir.split('/');
// 	const pathArray = input.split('/');

// 	const lastDir = wdArray[wdArray.length - 1];
// 	console.log(lastDir);

// 	for (let item of NodesArray) {
// 		console.log(item.value);
// 		if (item.value === lastDir) {
// 			for (let dir of item.dirs) {
// 				// if (dir.value === dirToCDIn) {
// 				// 	setWorkingDir(`${workingDir}/${dirToCDIn}`);
// 				// 	validCd = 1;
// 				// }
// 				console.log(dir);
// 				console.log(pathArray);
// 			}
// 		}
// 	}
// };

// checkPath('~', 'Projects/WheaterApp', NodesArray);

// // let path = 'Projects';

// // let pathArray = path.split('/');

// // console.log(pathArray);
