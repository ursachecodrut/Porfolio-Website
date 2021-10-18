export class TreeNode {
	constructor(value) {
		this.value = value;
		this.parent = null;
		this.dirs = [];
		this.files = [
			{
				fileName: '',
				fileContent: '',
			},
		];
	}

	addDir(dirname) {
		const child = new TreeNode(dirname);
		this.dirs.push(child);
		child.parent = this.value;
		return child;
	}

	addFile(fileName, fileContent) {
		this.files.push({ fileName, fileContent });
	}
}

const Root = new TreeNode('~');

const Projects = Root.addDir('Projects');
const About = Root.addDir('About');
About.addFile('aboutme.txt', "Hello, my name is Codrut. I'm a Web Developer");

const Draw2HTML = Projects.addDir('Draw2HTML');
Draw2HTML.addFile('openProject.sh', 'run project d');
Draw2HTML.addFile('aboutProject.txt', 'Draw2HTML description');

const WeatherApp = Projects.addDir('WeatherApp');
WeatherApp.addFile('openProject.sh', 'run project w');
WeatherApp.addFile('aboutProject.txt', 'WeatherApp description');

const SmartMirror = Projects.addDir('SmartMirror');
SmartMirror.addFile('openProject.sh', 'un project s');
SmartMirror.addFile('aboutProject.txt', 'SmartMirror description');

export const NodesArray = [
	Root,
	Projects,
	About,
	Draw2HTML,
	WeatherApp,
	SmartMirror,
];
