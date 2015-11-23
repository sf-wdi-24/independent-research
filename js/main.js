$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;


	//ball x and y positions
	var ballX = 10;
	var ballPosX = 10;
	var ballY = 10;
	var ballPosY = 10;

	//paddle variables
	var playerPaddleY = 230;
	var computerPaddleY = 10;
	var paddleWidth = 10;

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
	$(canvas).on('mousemove', function (evt) {
		var mousePos = mousePosition(evt);
		//mousePos.y minus paddheight/2 makes it so the mouse pointer is at center
		computerPaddleY = mousePos.y-(paddleHeight/2);
	})






function moveBall() {
	//x and y coordiantes changes as set interval calls this function
	ballX = ballX + ballPosX;
	// console.log(ballX + 'x pos');
	ballY = ballY + ballPosY;
	// console.log(ballY + 'y pos')

	//if ball width exceeds the width of the canvas
	if(ballX > (canvas.width - 10)) {
		if(ballY > computerPaddleY && ballY < computerPaddleY+paddleHeight) {
			ballPosX = -ballPosX;
		}else{
			resetBall();
		}
	}
	//0 is the left side of the board width
	if (ballX < 0) {
		if (ballY > playerPaddleY && ballY < playerPaddleY+paddleHeight ) {
			ballPosX = -ballPosX;
		}else {
			resetBall();	
		}
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
	//draw paddle player paddle
	colorRect(0, playerPaddleY, paddleWidth, paddleHeight, 'white');
	//draw paddle computer paddle
	colorRect(canvas.width - paddleWidth, computerPaddleY, paddleWidth, paddleHeight, 'powderblue');
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
// //move the paddle with mouse
function mousePosition (evt) {
	//returns the size of the element and its position relative to the viewport
	var grabBoard = canvas.getBoundingClientRect();
	//get the html page
	var entirePage = document.documentElement;
	//
	var mouseX = evt.clientX - grabBoard.left - entirePage.scrollLeft;
	var mouseY = evt.clientY - grabBoard.top - entirePage.scrollTop;
	return {
		x: mouseX,
		y: mouseY
	};
};
//function to reset the ball
function resetBall () {
	//after the ball hits the left side of the width, ball will change directions 
	ballPosX = -ballPosX;
	ballX = canvas.width / 2;
	ballY = canvas.height / 2;
};

});