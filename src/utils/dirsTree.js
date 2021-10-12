export class TreeNode {
	constructor(value) {
		this.value = value;
		this.parent = null;
		this.dirs = [];
		this.files = [];
	}

	addDir(dirname) {
		const child = new TreeNode(dirname);
		this.dirs.push(child);
		child.parent = this.value;
		return child;
	}

	addFile(filename) {
		this.files.push(filename);
	}
}

const Root = new TreeNode('~');

const Projects = Root.addDir('Projects');
const About = Root.addDir('About');

const Draw2HTML = Projects.addDir('Draw2HTML');
const WeatherApp = Projects.addDir('WeatherApp');

About.addFile('aboutme.txt');

console.log(Root);
console.log(Projects);

export const NodesArray = [Root, Projects, About, Draw2HTML, WeatherApp];
