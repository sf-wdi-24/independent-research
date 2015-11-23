$(function() {
	//loading before play is clicked
	$('#shoot').hide();

$('#reset').click(function(event){
			$('#reset').text("Reset");
			$('#reset').hide();
			$('#shoot').show();
	Physics(function(world){

		//  creates 'world' for elements to reside in
		var renderer = Physics.renderer('canvas', {
    el: 'viewport', // id of the canvas element
    width: 1000,
    height: 1000
		});

		var triangle = Physics.body('convex-polygon',{
			x: 110,
			y: 490,
			restitution: 0,
			treatment: 'static',
			hidden: true,
			vertices: [
				{x: 0, y:0},
				{x: -50, y:100},
				{x: 50, y:100},
			]
		});

		var rectangle = Physics.body('rectangle', {
			x: 110,
			y: 400,
			width: 150,
			height: 10,
			mass:2,
			hidden: true,
			restitution: 0
		});
		
		var helperBox = Physics.body('rectangle', {
			x:20,
			y:475,
			height: 100,
			width: 50,
			restitution: 0,
			hidden: true,
			treatment: 'static'
		});

		var fallingBox = Physics.body('rectangle', {
			x: 160,
			y: 0,
			vy: 1,
			height: 5,
			width: 5,
			mass: 2,
			hidden: true,
			styles: {
              fillStyle: '#268bd2',
              angleIndicator: '#268bd2',
              strokeStyle: '#155479',
              lineWidth: 1
            	}
		});

		var projectile = Physics.body('rectangle', {
			x: 70,
			y: 308,
			height: 20,
			width: 20,
			restitution: 0,
			mass: 0.9
		});

		function createBasketball(){
			var basketball = Physics.body('circle', {
				x: 72,
				y: 400,
				radius: 13,
				restitution: 0.5,
				mass: 0.8
			});
			basketball.view = new Image();
			basketball.view.src = ('basketball.png');
			world.add(basketball);
		}

		var backboard = Physics.body('rectangle', {
			x: 900,
			y: 200,
			height: 200,
			width: 5,
			treatment: 'static',
			hidden: true
		});
		var rim = Physics.body('convex-polygon', {
			x: 805,
			y: 275,
			treatment: 'static',
			vertices: [
				{x:-10, y: 0},
				{x:10, y: 55}
			]
		});
		var rimLeft = Physics.body('rectangle', {
			x: 800,
			y: 300,
			width: 1,
			height: 100,
			treatment: 'static',
			rotation: 270,
			hidden: true
		});
		// set boundaries on world
		var bounds = Physics.aabb(0,0,1000,635);

		// add gravity
		world.add(Physics.behavior('constant-acceleration'));

		// set objects to sense edge of world
		world.add( Physics.behavior('edge-collision-detection', {
			aabb: bounds,
			restitution: 0.4
		}));

		world.add(rim);
		world.add(backboard);
		world.add(rectangle);
		world.add(triangle);
		world.add(helperBox);
		// redraw world
		world.add(renderer);

		// allow shapes to collide with each other
		world.add(Physics.behavior('body-impulse-response'));
		world.add(Physics.behavior('body-collision-detection'));
		world.add(Physics.behavior('sweep-prune'));

		// introduce time to the world so that events can happen
		Physics.util.ticker.on(function (time, dt) {
			world.step(time);
		});

		Physics.util.ticker.start();

		world.on('step', function() {
			world.render();
		});

		$('#shoot').click(function(event){
		world.add(fallingBox);
		createBasketball();
		$('#reset').show();
		$('#shoot').hide();
		});

		world.render();
	}); //end of Physics world function


});

});