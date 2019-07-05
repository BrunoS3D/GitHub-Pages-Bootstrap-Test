var current_word = 0;
var message = 'Hello World!';
var speed = 200;

function typeWriter() {
	if (current_word < message.length) {
		document.getElementById("typewriter-field").innerHTML += message.charAt(current_word++);
		setTimeout(typeWriter, speed);
	}
}

// delay to page load
setTimeout(typeWriter, 50);