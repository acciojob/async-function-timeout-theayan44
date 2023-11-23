//your JS code here. If required.
const text = document.getElementById("text").value;
const delay = document.getElementById("delay").value;
const output = document.getElementById("output");
async function display() {
	output.innerText = await new Promise((res, rej)=>{
		setTimeout(res, delay, text);
	});
}
display();