$(function() {

	var $body = $('body'),
			$box = $('.box'),
			$newTriangle = $('.new-triangle'),
			$coordinates = $('button#coordinates'),
			$points = $('#points'),
			$transformations = $('#transformations'),
			$transformationBtns = $('#transformation-buttons'),
			$chooseTransformation = $('#choose-transformation'),
			$translationBtn = $('#translation-btn'),
			$reflectionBtn = $('#reflection-btn'),
			$rotationBtn = $('#rotation-btn'),
			$translation = $('#translation'),
			$reflection = $('#reflection'),
			$rotation = $('#rotation'),
			$horizontalSlide = $('#horizontal-slide'),
			$verticalSlide = $('#vertical-slide'),
			$translationSubmit = $('#translation-submit'),
			$coordinateax = $('.ax'),
			$coordinateay = $('.ay'),
			$coordinatebx = $('.bx'),
			$coordinateby = $('.by'),
			$coordinatecx = $('.cx'),
			$coordinatecy = $('.cy'),
			$coordinatedx = $('.dx'),
			$coordinatedy = $('.dy'),
			$coordinateex = $('.ex'),
			$coordinateey = $('.ey'),
			$coordinatefx = $('.fx'),
			$coordinatefy = $('.fy'),
			$ax = $('#ax'),
			$ay = $('#ay'),
			$bx = $('#bx'),
			$by = $('#by'),
			$cx = $('#cx'),
			$cy = $('#cy'),
			$canvas = $('#canvas');

	//Declare global variables for canvas
	var renderer,
			scene,
			camera,
			controls,
			meshMaterial;

	var triangleABC = { ax: 0, ay: 0, bx: 0, by: 0, cx: 0, cy: 0};
	var triangleDEF = { dx: 0, dy: 0, ex: 0, ey: 0, fx: 0, fy: 0};
	var triABC = new THREE.Geometry();
	var triDEF = new THREE.Geometry();


	// Set event handlers
	$coordinates.on('click', getPoints);
	$translationBtn.on('click', translation);
	$reflectionBtn.on('click', reflection);
	$rotationBtn.on('click', rotation);
	$translationSubmit.on('click', renderTranslation);

	function translation() {
		event.preventDefault();
		$body.css('background-color', '#ffb2b2');
		$box.css('background-color', '#ffcccc');
		$chooseTransformation.toggle();
		$transformationBtns.toggle();
		$translation.toggle();
	}

	function renderTranslation() {
		event.preventDefault();
		var h = Number($horizontalSlide.val());
		var k = Number($verticalSlide.val());
		triangleDEF.dx = triangleABC.ax + h;
		triangleDEF.dy = triangleABC.ay + k;
		triangleDEF.ex = triangleABC.bx + h;
		triangleDEF.ey = triangleABC.by + k;
		triangleDEF.fx = triangleABC.cx + h;
		triangleDEF.fy = triangleABC.cy + k;
		console.log(triangleDEF);
		var vertexD = new THREE.Vector3(triangleDEF.dx, triangleDEF.dy, 0);
		var vertexE = new THREE.Vector3(triangleDEF.ex, triangleDEF.ey, 0);
		var vertexF = new THREE.Vector3(triangleDEF.fx, triangleDEF.fy, 0);
		triDEF.vertices.push(vertexD);
		triDEF.vertices.push(vertexE);
		triDEF.vertices.push(vertexF);
		triDEF.faces.push( new THREE.Face3(0,1,2));
		triDEF.computeFaceNormals();
		var mesh2 = new THREE.Mesh( triDEF, new THREE.MeshNormalMaterial() );
		scene.add(mesh2);
		insertNewPoints();
		$newTriangle.toggle();
	}

	function reflection() {
		event.preventDefault();
		$body.css('background-color', '#b2ffb2');
		$box.css('background-color', '#ccffcc');
		$chooseTransformation.toggle();
		$transformationBtns.toggle();
		$reflection.toggle();
	}

	function rotation() {
		event.preventDefault();
		$body.css('background-color', '#b2b2ff');
		$box.css('background-color', '#ccccff');
		$chooseTransformation.toggle();
		$transformationBtns.toggle();
		$rotation.toggle();
	}

	function getPoints() {
		event.preventDefault();
		triangleABC.ax = Number($ax.val());
		triangleABC.ay = Number($ay.val());
		triangleABC.bx = Number($bx.val());
		triangleABC.by = Number($by.val());
		triangleABC.cx = Number($cx.val());
		triangleABC.cy = Number($cy.val());
		console.log(triangleABC);
		var vertexA = new THREE.Vector3(triangleABC.ax, triangleABC.ay, 0);
		var vertexB = new THREE.Vector3(triangleABC.bx, triangleABC.by, 0);
		var vertexC = new THREE.Vector3(triangleABC.cx, triangleABC.cy, 0);
		triABC.vertices.push(vertexA);
		triABC.vertices.push(vertexB);
		triABC.vertices.push(vertexC);
		triABC.faces.push( new THREE.Face3(0,1,2));
		triABC.computeFaceNormals();
		var mesh = new THREE.Mesh( triABC, new THREE.MeshNormalMaterial() );
		scene.add(mesh);
		emptyPointBoxes();
		insertPoints();
		$points.toggle();
		$transformations.toggle();
	}

	function emptyPointBoxes() {
		$ax.val('');
		$ay.val('');
		$bx.val('');
		$by.val('');
		$cx.val('');
		$cy.val('');
	}

	function insertPoints() {
		$coordinateax.text(triangleABC.ax);
		$coordinateay.text(triangleABC.ay);
		$coordinatebx.text(triangleABC.bx);
		$coordinateby.text(triangleABC.by);
		$coordinatecx.text(triangleABC.cx);
		$coordinatecy.text(triangleABC.cy);
	}

	function insertNewPoints() {
		$coordinatedx.text(triangleDEF.dx);
		$coordinatedy.text(triangleDEF.dy);
		$coordinateex.text(triangleDEF.ex);
		$coordinateey.text(triangleDEF.ey);
		$coordinatefx.text(triangleDEF.fx);
		$coordinatefy.text(triangleDEF.fy);
	}

	// Store height and width and set the canvas	
	var width = $canvas.width();
	var height = window.innerHeight * 0.55;
	var container = document.getElementById("canvas");
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize( width, height );
	renderer.setClearColor( 0xFFFFFF, 1.0 );
	container.appendChild( renderer.domElement );

	// Set the scene
	scene = new THREE.Scene();

	// Add axes using functions defined below
	axes = buildAxes( 10 );
	scene.add( axes );

	// Set the camera above the axes
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 0, 25 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

	// Controls to move the camera
	// controls = new THREE.TrackballControls( camera );
	// controls.rotateSpeed = 1.0;
	// controls.zoomSpeed = 0.2;
	// controls.panSpeed = 0.8;

	// controls.noZoom = false;
	// controls.noPan = false;

	// controls.staticMoving = true;
	// controls.dynamicDampingFactor = 0.3;

	// Animate
	animate();

	function animate() {
		requestAnimationFrame( animate );
		// controls.update();
		renderer.render( scene, camera );
	}

	function buildAxes( length ) {
		var axes = new THREE.Object3D(),
		index;
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( length, 0, 0 ), 0x000000, 3 ) ); // +X
		for (index = -length; index <= length; index++) {
			axes.add( buildAxis( new THREE.Vector3( 0, index, 0 ), new THREE.Vector3( length, index, 0 ), 0x000000, 1 ) );		
		}
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -length, 0, 0 ), 0x000000, 3) ); // -X
		for (index = -length; index <= length; index++) {
			axes.add( buildAxis( new THREE.Vector3( 0, index, 0 ), new THREE.Vector3( -length, index, 0 ), 0x000000, 1 ) );		
		}
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, length, 0 ), 0x000000, 3 ) ); // +Y
		for (index = -length; index <= length; index++) {
			axes.add( buildAxis( new THREE.Vector3( index, 0, 0 ), new THREE.Vector3( index, length, 0 ), 0x000000, 1 ) );		
		}
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -length, 0 ), 0x000000, 3 ) ); // -Y
		for (index = -length; index <= length; index++) {
			axes.add( buildAxis( new THREE.Vector3( index, 0, 0 ), new THREE.Vector3( index, -length, 0 ), 0x000000, 1 ) );		
		}
		// axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, length ), 0x0000FF, false ) ); // +Z
		// axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -length ), 0x0000FF, true ) ); // -Z
		return axes;
	}

	function buildAxis( src, dst, colorHex, linewidth ) {
		var geom = new THREE.Geometry(),
			mat; 
		mat = new THREE.LineBasicMaterial({ linewidth: linewidth, color: colorHex });
		geom.vertices.push( src.clone() );
		geom.vertices.push( dst.clone() );
		var axis = new THREE.Line( geom, mat, THREE.LineSegments );
		return axis;
	}

});





