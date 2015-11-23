$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;


	//ball x and y positions
	var ballX = 10;
	var ballPosX = 2;
	var ballY = 10;
	var ballPosY = 2;

	//paddle variables
	var playerPaddleY = 90;
	//set paddle height
	var paddleHeight = 100;





	// canvas = document.getElementById('newCanvas');
	canvas = $('#newCanvas')[0];
	canvasContext = canvas.getContext('2d');
	//use setInterval to move 
	var fps = 30;
	setInterval(function () {
		moveBall();
		draw();
	}, 1000/fps);

	//add event listener
	$(canvas).on('mousemove', function (event) {
		var mousePos = mousePosition(event);
		playerPaddleY = mousePos.y
		console.log('mouse moves')
	});






function moveBall() {
	//x and y coordiantes changes as set interval calls this function
	ballX = ballX + ballPosX;
	// console.log(ballX + 'x pos');
	ballY = ballY + ballPosY;
	// console.log(ballY + 'y pos')

	//if ball width exceeds the width of the canvas
	if(ballX > (canvas.width - 10)) {
		ballPosX = -ballPosX;
	}
	//0 is the left side of the board width
	if (ballX < 0) {
		ballPosX = -ballPosX;
	};
	//if ballY height exceeds the height of the canvas
	if(ballY > (canvas.height - 7)) {
		ballPosY = -ballPosY;
	}
	//0 is the left side of the board width
	if (ballY < 0) {
		ballPosY = -ballPosY;
	};
}
function draw() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	//draw paddle
	colorRect(0, paddleHeight, 10, paddleHeight, 'white');
	//draw circle
	makeCircle(ballX, ballY, 7, 'yellow');
	
	};

function makeCircle(centerX, centerY, radius, color) {
	//build the circle
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	// .arc parameters (x, y, radius, startAngle, endAngle, counterclockwise or clockwise fill)
	//endAngle using radians because internet said so..math.pi
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}
function colorRect(leftX, topY, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(leftX, topY, width, height);
};
//move the paddle with mouse
function mousePosition (evt) {
	//returns the size of the element and its position relative to the viewport
	var board = canvas.getBoundingClientRect();
	//get the html page
	var root = document.documentElement;
	//
	var mouseX = evt.clientX - board.left - root.scrollLeft;
	var mouseY = evt.clientY - board.top - root.scrollTop;
	return {
		x: mouseX,
		y: mouseY
	};

}


});