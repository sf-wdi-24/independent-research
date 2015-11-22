$(function() {

	Physics(function(world){

		//  creates 'world' for elements to reside in
		var renderer = Physics.renderer('canvas', {
    el: 'viewport', // id of the canvas element
    width: 1000,
    height: 500
		});

		var triangle = Physics.body('convex-polygon',{
			x: 210,
			y: 499,
			vertices: [
				{x: -60, y:0},
				{x: -42, y:-100},
				{x: -30, y:-100},
				{x: 20, y:0}
			]
		});

		var ball = Physics.body('circle', {
			x: 50,
			y: 40,
			radius: 20,
			mass:1
		});

		var rectangle = Physics.body('rectangle', {
			x: 190,
			y: 400,
			width: 300,
			height: 10,
			mass:2
		});
		var rectangleLip = Physics.body('rectangle', {
			x: 100,
			y:390,
			width: 5,
			height: 10
		});
		var catapultArm = Physics.body('compound', {
			x:160,
			y:400,
			children: [
				rectangle,rectangleLip
			],
			mass: 0.2
		});
		var helperBox = Physics.body('rectangle', {
			x:20,
			y:490,
			height: 100,
			width: 60
		});

		var fallingBox = Physics.body('rectangle', {
			x: 320,
			y: 0,
			vy: 1,
			height: 40,
			width: 40,
			mass: 2,
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
			width: 20
		});
		// set boundaries on world
		var bounds = Physics.aabb(0,0,2000,500);

		// add gravity
		world.add(Physics.behavior('constant-acceleration'));

		// set objects to sense edge of world
		world.add( Physics.behavior('edge-collision-detection', {
			aabb: bounds,
			restitution: 0
		}));

		//world.add(projectile);
		world.add(ball);
		//world.add(rectangle);
		world.add(catapultArm);
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

		$('#fire').click(function(event){
		console.log('works');
		world.add(fallingBox);
		});

		$('#reset').click(function(event){
			world.reset();
		});
		world.render();
	}); //end of Physics world function




});