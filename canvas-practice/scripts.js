$(document).ready(function () {
	console.log('JS LOADED');
		
		// LEFT BOXES
		var canvasTopLeft = document.getElementById('canvasTestTopLeft'),
					ctxTopLeft = canvasTopLeft.getContext('2d');
					ctxTopLeft.globalAlpha = 0.7;
					ctxTopLeft.fillStyle= 'lightgreen';
					ctxTopLeft.fillRect(50,50,100,100);
					ctxTopLeft.globalAlpha = 0.5;
					ctxTopLeft.fillStyle= 'pink';
					ctxTopLeft.fillRect(75,75,100,100);
					ctxTopLeft.globalAlpha = 0.5;
					ctxTopLeft.fillStyle= 'lightblue';
					ctxTopLeft.fillRect(100,100,100,100);
					ctxTopLeft.globalAlpha = 0.4;
					ctxTopLeft.strokeStyle="red";
					ctxTopLeft.strokeRect(100, 100, 60, 60);
					ctxTopLeft.globalAlpha = 0.4;
					ctxTopLeft.strokeStyle="red";
					ctxTopLeft.strokeRect(95, 95, 70, 70);
					ctxTopLeft.globalAlpha = 0.4;
					ctxTopLeft.strokeStyle="red";
					ctxTopLeft.strokeRect(90, 90, 80, 80);
					ctxTopLeft.globalAlpha = 0.4;
					ctxTopLeft.strokeStyle="red";
					ctxTopLeft.strokeRect(85, 85, 90, 90);
					ctxTopLeft.globalAlpha = 0.4;
					ctxTopLeft.strokeStyle="red";
					ctxTopLeft.strokeRect(80, 80, 100, 100);
					ctxTopLeft.globalAlpha = 0.2;
					ctxTopLeft.fillStyle="yellow";
					ctxTopLeft.fillRect(120, 120, 20, 20);

		var canvasLeft = document.getElementById('canvasTestLeft'),
					ctxLeft = canvasLeft.getContext('2d');
					ctxLeft.globalAlpha = 0.7;
					ctxLeft.fillStyle= 'lightgreen';
					ctxLeft.fillRect(50,50,100,100);
					ctxLeft.globalAlpha = 0.5;
					ctxLeft.fillStyle= 'pink';
					ctxLeft.fillRect(75,75,100,100);
					ctxLeft.globalAlpha = 0.5;
					ctxLeft.fillStyle= 'lightblue';
					ctxLeft.fillRect(100,100,100,100);
					ctxLeft.globalAlpha = 0.4;
					ctxLeft.strokeStyle="red";
					ctxLeft.strokeRect(100, 100, 50, 50);
					ctxLeft.fillStyle="red";
					ctxLeft.fillRect(75, 150, 25, 25);
					ctxLeft.fillStyle="red";
					ctxLeft.fillRect(150, 75, 25, 25);
					ctxLeft.globalAlpha = 0.3;
					ctxLeft.strokeStyle= 'red';
					ctxLeft.strokeRect(119.25, 119.25, 12.5, 12.5);
					ctxLeft.strokeStyle= 'red';
					ctxLeft.strokeRect(112.5, 112.5, 25, 25);
					ctxLeft.strokeStyle= 'red';
					ctxLeft.strokeRect(105.75, 105.75, 37.5, 37.5);


		var canvasBottomLeft = document.getElementById('canvasTestBottomLeft'),
					ctxBottomLeft = canvasBottomLeft.getContext('2d');
					ctxBottomLeft.globalAlpha = 0.7;
					ctxBottomLeft.strokeStyle= 'lightgreen';
					ctxBottomLeft.strokeRect(50, 50, 100, 100);
					ctxBottomLeft.globalAlpha = 0.7;
					ctxBottomLeft.strokeStyle= 'pink';
					ctxBottomLeft.strokeRect(75, 75, 100, 100);
					ctxBottomLeft.globalAlpha = 0.5;
					ctxBottomLeft.fillStyle= 'lightblue';
					ctxBottomLeft.fillRect(100, 100, 100, 100);
					ctxBottomLeft.globalAlpha = 0.7;
					ctxBottomLeft.fillStyle= 'white';
					ctxBottomLeft.fillRect(112.5, 112.5, 12.5, 12.5);
					ctxBottomLeft.strokeStyle= 'yellow';
					ctxBottomLeft.strokeRect(112.5, 112.5, 25, 25);
					ctxBottomLeft.strokeStyle= 'yellow';
					ctxBottomLeft.strokeRect(112.5, 112.5, 37.5, 37.5);
					ctxBottomLeft.strokeStyle= 'yellow';
					ctxBottomLeft.strokeRect(112.5, 112.5, 50, 50);
					ctxBottomLeft.strokeStyle= 'yellow';
					ctxBottomLeft.strokeRect(112.5, 112.5, 62.5, 62.5);
					ctxBottomLeft.strokeStyle= 'yellow';
					ctxBottomLeft.strokeRect(112.5, 112.5, 75, 75);

		// CENTER BOXES
		var canvasTop = document.getElementById('canvasTestTop'),
					ctxTop = canvasTop.getContext('2d');
					ctxTop.globalAlpha = 0.7;
					ctxTop.fillStyle= 'lightgreen';
					ctxTop.fillRect(50,50,100,100);
					ctxTop.globalAlpha = 0.5;
					ctxTop.fillStyle= 'pink';
					ctxTop.fillRect(75,75,100,100);
					ctxTop.globalAlpha = 0.5;
					ctxTop.fillStyle= 'lightblue';
					ctxTop.fillRect(100,100,100,100);
					ctxTop.globalAlpha = 0.4;
					ctxTop.strokeStyle="red";
					ctxTop.strokeRect(100, 100, 60, 60);
					ctxTop.globalAlpha = 0.4;
					ctxTop.strokeStyle="red";
					ctxTop.strokeRect(95, 95, 70, 70);
					ctxTop.globalAlpha = 0.4;
					ctxTop.strokeStyle="red";
					ctxTop.strokeRect(90, 90, 80, 80);
					ctxTop.globalAlpha = 0.4;
					ctxTop.strokeStyle="red";
					ctxTop.strokeRect(85, 85, 90, 90);
					ctxTop.globalAlpha = 0.4;
					ctxTop.strokeStyle="red";
					ctxTop.strokeRect(80, 80, 100, 100);
					ctxTop.globalAlpha = 0.2;
					ctxTop.fillStyle="yellow";
					ctxTop.fillRect(120, 120, 20, 20);

		var canvas = document.getElementById('canvasTest'),
					ctx = canvas.getContext('2d');
					ctx.globalAlpha = 0.7;
					ctx.fillStyle= 'lightgreen';
					ctx.fillRect(50,50,100,100);
					ctx.globalAlpha = 0.5;
					ctx.fillStyle= 'pink';
					ctx.fillRect(75,75,100,100);
					ctx.globalAlpha = 0.5;
					ctx.fillStyle= 'lightblue';
					ctx.fillRect(100,100,100,100);
					ctx.globalAlpha = 0.4;
					ctx.strokeStyle="red";
					ctx.strokeRect(100, 100, 50, 50);
					ctx.fillStyle="red";
					ctx.fillRect(75, 150, 25, 25);
					ctx.fillStyle="red";
					ctx.fillRect(150, 75, 25, 25);
					ctx.globalAlpha = 0.3;
					ctx.strokeStyle= 'red';
					ctx.strokeRect(119.25, 119.25, 12.5, 12.5);
					ctx.strokeStyle= 'red';
					ctx.strokeRect(112.5, 112.5, 25, 25);
					ctx.strokeStyle= 'red';
					ctx.strokeRect(105.75, 105.75, 37.5, 37.5);


		var canvasBottom = document.getElementById('canvasTestBottom'),
					ctxBottom = canvasBottom.getContext('2d');
					ctxBottom.globalAlpha = 0.7;
					ctxBottom.strokeStyle= 'lightgreen';
					ctxBottom.strokeRect(50, 50, 100, 100);
					ctxBottom.globalAlpha = 0.7;
					ctxBottom.strokeStyle= 'pink';
					ctxBottom.strokeRect(75, 75, 100, 100);
					ctxBottom.globalAlpha = 0.5;
					ctxBottom.fillStyle= 'lightblue';
					ctxBottom.fillRect(100, 100, 100, 100);
					ctxBottom.globalAlpha = 0.7;
					ctxBottom.fillStyle= 'white';
					ctxBottom.fillRect(112.5, 112.5, 12.5, 12.5);
					ctxBottom.strokeStyle= 'yellow';
					ctxBottom.strokeRect(112.5, 112.5, 25, 25);
					ctxBottom.strokeStyle= 'yellow';
					ctxBottom.strokeRect(112.5, 112.5, 37.5, 37.5);
					ctxBottom.strokeStyle= 'yellow';
					ctxBottom.strokeRect(112.5, 112.5, 50, 50);
					ctxBottom.strokeStyle= 'yellow';
					ctxBottom.strokeRect(112.5, 112.5, 62.5, 62.5);
					ctxBottom.strokeStyle= 'yellow';
					ctxBottom.strokeRect(112.5, 112.5, 75, 75);

		// RIGHT BOXES
		var canvasTopRight = document.getElementById('canvasTestRight'),
					ctxTopRight = canvasTopRight.getContext('2d');
					ctxTopRight.globalAlpha = 0.7;
					ctxTopRight.fillStyle= 'lightgreen';
					ctxTopRight.fillRect(50,50,100,100);
					ctxTopRight.globalAlpha = 0.5;
					ctxTopRight.fillStyle= 'pink';
					ctxTopRight.fillRect(75,75,100,100);
					ctxTopRight.globalAlpha = 0.5;
					ctxTopRight.fillStyle= 'lightblue';
					ctxTopRight.fillRect(100,100,100,100);
					ctxTopRight.globalAlpha = 0.4;
					ctxTopRight.strokeStyle="red";
					ctxTopRight.strokeRect(100, 100, 60, 60);
					ctxTopRight.globalAlpha = 0.4;
					ctxTopRight.strokeStyle="red";
					ctxTopRight.strokeRect(95, 95, 70, 70);
					ctxTopRight.globalAlpha = 0.4;
					ctxTopRight.strokeStyle="red";
					ctxTopRight.strokeRect(90, 90, 80, 80);
					ctxTopRight.globalAlpha = 0.4;
					ctxTopRight.strokeStyle="red";
					ctxTopRight.strokeRect(85, 85, 90, 90);
					ctxTopRight.globalAlpha = 0.4;
					ctxTopRight.strokeStyle="red";
					ctxTopRight.strokeRect(80, 80, 100, 100);
					ctxTopRight.globalAlpha = 0.2;
					ctxTopRight.fillStyle="yellow";
					ctxTopRight.fillRect(120, 120, 20, 20);

		var canvasRight = document.getElementById('canvasTestBottomRight'),
					ctxRight = canvasRight.getContext('2d');
					ctxRight.globalAlpha = 0.7;
					ctxRight.fillStyle= 'lightgreen';
					ctxRight.fillRect(50,50,100,100);
					ctxRight.globalAlpha = 0.5;
					ctxRight.fillStyle= 'pink';
					ctxRight.fillRect(75,75,100,100);
					ctxRight.globalAlpha = 0.5;
					ctxRight.fillStyle= 'lightblue';
					ctxRight.fillRect(100,100,100,100);
					ctxRight.globalAlpha = 0.4;
					ctxRight.strokeStyle="red";
					ctxRight.strokeRect(100, 100, 50, 50);
					ctxRight.fillStyle="red";
					ctxRight.fillRect(75, 150, 25, 25);
					ctxRight.fillStyle="red";
					ctxRight.fillRect(150, 75, 25, 25);
					ctxRight.globalAlpha = 0.3;
					ctxRight.strokeStyle= 'red';
					ctxRight.strokeRect(119.25, 119.25, 12.5, 12.5);
					ctxRight.strokeStyle= 'red';
					ctxRight.strokeRect(112.5, 112.5, 25, 25);
					ctxRight.strokeStyle= 'red';
					ctxRight.strokeRect(105.75, 105.75, 37.5, 37.5);


		var canvasBottomRight = document.getElementById('canvasTestTopRight'),
					ctxBottomRight = canvasBottomRight.getContext('2d');
					ctxBottomRight.globalAlpha = 0.7;
					ctxBottomRight.strokeStyle= 'lightgreen';
					ctxBottomRight.strokeRect(50, 50, 100, 100);
					ctxBottomRight.globalAlpha = 0.7;
					ctxBottomRight.strokeStyle= 'pink';
					ctxBottomRight.strokeRect(75, 75, 100, 100);
					ctxBottomRight.globalAlpha = 0.5;
					ctxBottomRight.fillStyle= 'lightblue';
					ctxBottomRight.fillRect(100, 100, 100, 100);
					ctxBottomRight.globalAlpha = 0.7;
					ctxBottomRight.fillStyle= 'white';
					ctxBottomRight.fillRect(112.5, 112.5, 12.5, 12.5);
					ctxBottomRight.strokeStyle= 'yellow';
					ctxBottomRight.strokeRect(112.5, 112.5, 25, 25);
					ctxBottomRight.strokeStyle= 'yellow';
					ctxBottomRight.strokeRect(112.5, 112.5, 37.5, 37.5);
					ctxBottomRight.strokeStyle= 'yellow';
					ctxBottomRight.strokeRect(112.5, 112.5, 50, 50);
					ctxBottomRight.strokeStyle= 'yellow';
					ctxBottomRight.strokeRect(112.5, 112.5, 62.5, 62.5);
					ctxBottomRight.strokeStyle= 'yellow';
					ctxBottomRight.strokeRect(112.5, 112.5, 75, 75);


});