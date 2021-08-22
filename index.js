// Change 1000 to any number
const num = 1000;
const event = new KeyboardEvent('keydown', {key: ' ', ctrlKey: true});
setInterval(function(){
	for (i=0; i < num; i++) { document.dispatchEvent(event)}
}, 0);
