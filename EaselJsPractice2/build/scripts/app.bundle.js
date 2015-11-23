(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('STARTED');

var utils = require('./utils'),
		domReady = utils.domReady;

var c = createjs;

console.log('Game Started: EaselJS version: ' + c.EaselJS.version);

domReady(function() {
	var stage = new c.Stage('main');

	var group = new c.Container();
	group.x = 250;
	group.y = 250;
	group.regX = 100;
	group.regY = 100;
	stage.addChild(group);

	group.on('tick', function (event) {
		square.rotation += Math.random() * 3;
		circle.rotation += Math.random() * 5;
		triangle.rotation -= Math.random() * 2;
		squareBig.rotation += Math.random() * 4;
		squareBigYellow.rotation -= Math.random();
		squareBigSalmon.rotation += Math.random() * 8;
		squareBigLightGreen.rotation -= Math.random() * 6;

	});

	var triangle = new c.Shape();
	triangle.graphics.beginStroke('orange')
									.drawPolyStar(0, 0, 50, 5 , 0)
									.endStroke()
									.beginStroke('orange')
									.drawPolyStar(0, 0, 50, 5 , 0, 180)
									.endStroke()
									.beginStroke('orange')
									.drawPolyStar(0, 0, 40, 4 , 0)
									.endStroke()
									.beginStroke('orange')
									.drawPolyStar(0, 0, 30, 3 , 0, 180)
									.endStroke();
									

	triangle.x = 100;
	triangle.y = 100;
	group.addChild(triangle);

	var circle = new c.Shape();
	circle.graphics.beginStroke('lightgreen')
									.drawCircle(0, 0, 50)
									.endStroke()
									.beginStroke('lightgreen')
									.drawCircle(0, 0, 40)
									.endStroke()
									.beginStroke('lightgreen')
									.drawCircle(0, 0, 30)
									.endStroke()
									.beginStroke('lightblue')
									.drawPolyStar(0, 0, 50, 2 , 3)
									.endStroke()
									.beginStroke('lightyellow')
									.drawPolyStar(0, 0, 10, 2 , 4)
									.endStroke()
									.beginStroke('pink')
									.drawCircle(0, 0, 10)
									.endStroke();
	circle.x = 100;
	circle.y = 100;
	group.addChild(circle);

	var square = new c.Shape();
	square.graphics.beginStroke('pink')
									.drawRect(50, 50, -50, -50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(40, 40, -30, -30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(60, 60, -20, -20)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-50, -50, 50, 50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-40, -40, 30, 30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-60, -60, 20, 20)
									.endStroke()
									.beginStroke('pink')
									.drawRect(50, -50, 50, -50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(40, -40, 30, -30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(60, -60, 20, -20)
									.endStroke()
									.beginStroke('pink')
									.drawRect(50, -50, -50, 50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(40, -40, -30, 30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(60, -60, -20, 20)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-50, 50, -50, 50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-40, 40, -30, 30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-60, 60, -20, 20)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-50, 50, 50, -50)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-40, 40, 30, -30)
									.endStroke()
									.beginStroke('pink')
									.drawRect(-60, -60, 20, 20)
									.endStroke();

	square.x = 100;
	square.y = 100;
	group.addChild(square);

	var squareBig = new c.Shape();
		squareBig.graphics.beginStroke('orange')
									.drawRect(-50, -50, 100, 100)
									.endStroke()
									.beginStroke('orange')
									.drawRect(-250, -250, 500, 500)
									.endStroke()
									.beginStroke('orange')
									.drawRect(-200, -200, 400, 400)
									.endStroke();
	squareBig.x = 100;
	squareBig.y = 100;
	group.addChild(squareBig);

	var squareBigYellow = new c.Shape();
		squareBigYellow.graphics.beginStroke('yellow')
									.drawRect(-25, -25, 50, 50)
									.endStroke()
									.beginStroke('yellow')
									.drawRect(-200, -200, 400, 400)
									.endStroke()
									.beginStroke('yellow')
									.drawRect(-150, -150, 300, 300)
									.endStroke();
	squareBigYellow.x = 100;
	squareBigYellow.y = 100;
	group.addChild(squareBigYellow);

	var squareBigSalmon = new c.Shape();
		squareBigSalmon.graphics.beginStroke('Salmon')
									.drawRect(-12.5, -12.5, 25, 25)
									.endStroke()
									.beginStroke('Salmon')
									.drawRect(-150, -150, 300, 300)
									.endStroke()
									.beginStroke('Salmon')
									.drawRect(-100, -100, 200, 200)
									.endStroke();
	squareBigSalmon.x = 100;
	squareBigSalmon.y = 100;
	group.addChild(squareBigSalmon);

	var squareBigLightGreen = new c.Shape();
		squareBigLightGreen.graphics.beginStroke('lightgreen')
									.drawRect(-6.75, -6.75, 12.5, 12.5)
									.endStroke()
									.beginStroke('lightgreen')
									.drawRect(-100, -100, 200, 200)
									.endStroke()
									.beginStroke('lightgreen')
									.drawRect(-50, -50, 100, 100)
									.endStroke();
	squareBigLightGreen.x = 100;
	squareBigLightGreen.y = 100;
	group.addChild(squareBigLightGreen);

	c.Ticker.timingMode = c.Ticker.RAF;
	c.Ticker.setFPS(60);
	c.Ticker.addEventListener('tick', function (event){
		stage.update();
	});
});
},{"./utils":3}],2:[function(require,module,exports){

module.exports = domReady;


/**
 * Fires when dom is ready, can be used at any time as result is cached
 * @param  {Function} func callback function for when dom is ready
 * @return {Any}           returns whatever func returns
 */
function domReady(func) { // , arguments
    var self = this,
        args = Array.prototype.slice.call(arguments, 1);
    if (isReady.call(this))
        return callFunc();
    else
        document.addEventListener('readystatechange', callFunc);

    function callFunc() {
        document.removeEventListener('readystatechange', callFunc);
        return func.apply(self, args);
    }
}

domReady.isReady = isReady;


/**
 * Returns true if the dom is ready
 * @return {Boolean}
 */
function isReady() {
    var readyState = document.readyState;
    return readyState == 'loading' ? false : readyState;
}
},{}],3:[function(require,module,exports){
module.exports = {
	domReady: require('./dom_ready')
};
},{"./dom_ready":2}]},{},[1]);