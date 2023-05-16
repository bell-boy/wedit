const codeInput = document.getElementById("codeInput");
const runButton = document.getElementById("runButton");
const outputRenderer = document.getElementById("subWindow");

let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

runButton.addEventListener("click", (eventObject) => {
	outputRenderer.srcdoc = codeInput.value;
});
