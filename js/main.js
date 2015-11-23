$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;


	// canvas = document.getElementById('newCanvas');
	canvas = $('#newCanvas')[0];
	canvasContext = canvas.getContext('2d');
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
})