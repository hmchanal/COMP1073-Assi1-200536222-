// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('#speakButton');

// Arrays for different word categories
var subjects = ['cat', 'dog', 'elephant', 'lion', 'monkey', 'bird'];
var verbs = ['jumped', 'ran', 'slept', 'ate', 'flew', 'swam'];
var adjectives = ['happy', 'sad', 'angry', 'tall', 'short', 'beautiful'];
var objects = ['ball', 'car', 'book', 'house', 'tree', 'flower'];
var places = ['park', 'beach', 'school', 'zoo', 'mountain', 'garden'];

/* Functions
-------------------------------------------------- */

// Function to pick a random element from an array
function getRandomElementFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
  }

// Event Listeners for each button
document.getElementById('subjectButton').onclick = function() {
	textToSpeak += getRandomElementFromArray(subjects) + ' ';
  };
  
  document.getElementById('verbButton').onclick = function() {
	textToSpeak += getRandomElementFromArray(verbs) + ' ';
  };
  
  document.getElementById('adjectiveButton').onclick = function() {
	textToSpeak += getRandomElementFromArray(adjectives) + ' ';
  };
  
  document.getElementById('objectButton').onclick = function() {
	textToSpeak += getRandomElementFromArray(objects) + ' ';
  };
  
  document.getElementById('placeButton').onclick = function() {
	textToSpeak += getRandomElementFromArray(places) + ' ';
  };

  
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
