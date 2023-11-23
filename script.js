//your JS code here. If required.

async function display() {	
	const text = document.getElementById("text");
	const delay = document.getElementById("delay");
	const output = document.getElementById("output");
	output.innerText = await new Promise((res, rej)=>{
		setTimeout(res, delay.value, text.value);
	});
}
// display();