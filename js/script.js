var button = document.getElementById('handler');

button.addEventListener('click', onMouseOut);
button.addEventListener('mouseover', onMouseOver);
button.addEventListener('move', onMouseMove);

function onMouseOut() {
	console.log('out');
}

function onMouseOver() {
	console.log('over');
}

function onMouseMove() {
  console.log('move');
}
			