const codeInput = document.getElementById("codeInput");
const runButton = document.getElementById("runButton");
const outputRenderer = document.getElementById("subWindow");

runButton.addEventListener("click", (eventObject) => {
	outputRenderer.srcdoc = codeInput.value;
});
