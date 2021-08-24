// Change 1000 to any number
var num = 1000;
var event = new KeyboardEvent('keydown', {key: ' ', ctrlKey: true});
for (i=0; i < num; i++) { document.dispatchEvent(event)}
