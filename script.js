//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
async function display() {
	await setTimeout(() => {
		output.innerText = text.value;
	}, delay.value);
}
display();