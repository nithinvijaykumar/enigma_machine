//p5.js used
let encodeSeed = document.getElementById(encodeSeed);
let encodeMessage = document.getElementById(encodeMessage);
let encodedMessage = document.getElementById(encodedMessage);
let encodeBtn = document.getElementById(encodeBtn);
encodeBtn.onclick = encode;
let decodeSeed = document.getElementById(decodeSeed);
let decodeMessage = document.getElementById(decodeMessage);
let decodedMessage = document.getElementById(decodedMessage);
let decodeBtn = document.getElementById(decodeBtn);
decodeBtn.onclick = decode;

let characters =  abcdefghijklmnopqrstuvwxyz0123456789.,'!().split();
characters.push('');
characters.push(n)
let value = {};


function setup() {
	for (let i = 0; i  characters.length; i++) {
		value[characters[i]] = i;
	}
	print(value);
}

function encode() {
	let seed = encodeSeed.value;
	randomSeed(seed);
	let message = encodeMessage.value.toLowerCase();
	let result = ;
	print(encode);
	for (let i = 0; i  message.length; i++) {
		let letter = message[i];
		let num = value[letter] + round(random(0, 100));
		num %= characters.length;
		result += characters[num];
	}
	encodedMessage.innerHTML = result;
}                                           
   
function decode() {
	let seed = decodeSeed.value;
	randomSeed(seed);
	let message = decodeMessage.value.toLowerCase();
	let result = ;
	for (let i = 0; i  message.length; i++) {
		let letter = message[i];
		let num = value[letter] - round(random(0, 100));
		num %= characters.length;
		num += characters.length;
		num %= characters.length;
		result += characters[num];
	}
decodedMessage.innerHTML = pre+result+pre;

	print(decode);
}