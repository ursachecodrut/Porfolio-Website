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

//Root section
const Projects = Root.addDir('Projects');
const About = Root.addDir('About');
const Skills = Root.addDir('Skills');
const Volunteer = Root.addDir('Volunteer');

//About section
About.addFile(
	'aboutme.txt',
	'My name is Codrut Ursache. I am a second year student of Bachelor in Computer Science at University Politehnica of Bucharest. I love working in React, Node, Express, JavaScript and more.'
);
About.addFile(
	'openLinkedIn.sh',
	'https://www.linkedin.com/in/codrut-stefan-ursache/'
);
About.addFile('openGithub.sh', 'https://github.com/ursachecodrut');

//Project section
const Draw2HTML = Projects.addDir('Draw2HTML');
Draw2HTML.addFile(
	'openProject.sh',
	'https://github.com/ursachecodrut/Draw2HTML'
);
Draw2HTML.addFile(
	'aboutProject.txt',
	'Machine Learning script built with Python and OpenCV that converts basic digital or pen and paper sketches into HTML and CSS code. The program splits the drawing into individual elements based on color and position, then transforms them into HTML tags.'
);

const WeatherApp = Projects.addDir('WeatherApp');
WeatherApp.addFile(
	'openProject.sh',
	'https://github.com/ursachecodrut/Weather-App'
);
WeatherApp.addFile(
	'aboutProject.txt',
	'Android & iOS app made with Flutter that displays current, hourly and daily weather details based on user’s location'
);

const SmartMirror = Projects.addDir('SmartMirror');
SmartMirror.addFile(
	'aboutProject.txt',
	'Smart Mirror made with a Raspberry Pi 3, simple HDMI Monitor, 2-way mirror glass and handmade wooden frame. The Mirror displays various messages based on the current time of the day. When turned on, other widgets like Weather, Local Time or Calendar can be enabled.'
);

//Skills section
Skills.addFile('languages.txt', 'JavaScript, Python, C, Dart');
Skills.addFile('tools.txt', 'Linux, Git');
Skills.addFile(
	'frameworks.txt',
	'ReactJS, ExpressJS, Flutter, Numpy, Bootstrap, Tailwind, OpenCV'
);

//Volunteer section
const MLSA = Volunteer.addDir('MLSA');
MLSA.addFile(
	'aboutMLSA.txt',
	'Microsoft Learning Student Ambassadors - Member of the AI Path - Learned how to build modern Machine Learning Applications.'
);

export const NodesArray = [
	Root,
	Projects,
	About,
	Skills,
	Volunteer,
	Draw2HTML,
	WeatherApp,
	SmartMirror,
	MLSA,
];
