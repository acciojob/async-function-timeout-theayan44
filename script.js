//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
async function display() {
	
	output.innerText = await new Promise((res, rej)=>{
		setTimeout(res, delay.value, text.value);
	});
}
display();