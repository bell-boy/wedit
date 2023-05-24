const codeInput = document.getElementById("codeInput");
const runButton = document.getElementById("runButton");
const tabContainer = document.getElementById("tabContainer");
const newButton = document.getElementById("newButton");
const outputRenderer = document.getElementById("subWindow");

let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");

let htmlSession = ace.createEditSession("");


function Tab(name, callback)
{
	this.session = ace.createEditSession(`<!doctype html>
<html>
	<head>
		<title>Our Funky HTML Page</title>
		<meta name="description" content="Our first page">
		<meta name="keywords" content="html tutorial template">
	</head>
	<body>
		Content goes here.
	</body>
</html>`);
	this.name = name;
	this.element = document.createElement("button");
	this.element.innerHTML = this.name;
	this.session.setMode("ace/mode/html");
	this.element.addEventListener("click", (eventObject) => callback(eventObject, this));
}

let tabs = [];
let defaultTab = new Tab('untitled note', (eventObject, object) => 
{
	editor.setSession(object.session);
}); 
tabs.push(defaultTab);
editor.setSession(tabs[tabs.length - 1].session);
tabContainer.append(tabs[tabs.length - 1].element);



newButton.addEventListener("click", (eventObject, object) => {
	let newTab = new Tab('untitled note', (eventObject, object) => 
	{
		editor.setSession(object.session);
	}); 
	tabs.push(newTab);
	editor.setSession(tabs[tabs.length - 1].session);
	tabContainer.append(tabs[tabs.length - 1].element);
});

runButton.addEventListener("click", (eventObject) => {
	outputRenderer.srcdoc = editor.getValue();
});

