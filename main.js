// Three.js ray.intersects with offset canvas

var container, camera, scene, renderer, mesh,

    objects = [],
    
    count = 0,

    CANVAS_WIDTH = 400,
    CANVAS_HEIGHT = 400;

container = document.getElementById( 'canvas' );
document.body.appendChild( container );

renderer = new THREE.WebGLRenderer();
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
container.appendChild( renderer.domElement );

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 45, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
camera.position.x = 600;
camera.position.y = 200;
camera.position.z = 600;
camera.lookAt( {x: 0, y: 150, z: 0} );
scene.add( camera );

scene.add( new THREE.AmbientLight( 0x222222 ) );

var lampHeight = 300;
var lampshadeHeight = 125;

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, lampHeight + lampshadeHeight, 100 );
spotLight.exponent = 6;
spotLight.intensity = 0;
scene.add( spotLight );

var spotLightFacingUp = new THREE.SpotLight( 0xffffff );
spotLightFacingUp.position.set( 100, lampHeight + lampshadeHeight + 1, 100 );
spotLightFacingUp.target = new THREE.Object3D(0, lampHeight + lampshadeHeight + 10, 0);
spotLightFacingUp.intensity = 0;
scene.add( spotLightFacingUp );

var pointLightRight = new THREE.PointLight( 0xffffff, 1 );
      pointLightRight.position.x = 50;
      pointLightRight.position.y = lampHeight;
      pointLightRight.position.z = 0;
    pointLightRight.intensity = 0;
scene.add( pointLightRight );

var lampshadeMaterial = new THREE.MeshPhongMaterial( { color : 0xFFD800 } ); 
lampshadeMaterial.opacity = 0.6;
lampshadeMaterial.transparent = true;
lampshade = new THREE.Mesh( 
    new THREE.CylinderGeometry( 70, 90, lampshadeHeight, 32, 1, true ),
    lampshadeMaterial
 );

lampshade.side = THREE.DoubleSide;
lampshade.position.x = 0;
lampshade.position.y = lampHeight;
lampshade.position.z = 0;
scene.add( lampshade );
objects.push( lampshade );

lamppost = new THREE.Mesh(
    new THREE.CylinderGeometry( 15, 15, lampHeight, 32, 1 ),
    new THREE.MeshPhongMaterial( { color : 0x654321 }
) );
lamppost.position.x = 0;
lamppost.position.y = lampHeight / 2;
lamppost.position.z = 0;
scene.add( lamppost );
objects.push( lamppost );

base = new THREE.Mesh(
    new THREE.CylinderGeometry( 80, 80, 80, 32, 1 ),
    new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );
base.position.x = 0;
base.position.y = 8;
base.position.z = 0;
scene.add( base );
objects.push( base );

tabletop = new THREE.Mesh(
            new THREE.BoxGeometry( 700, 400, 700 ),
            new THREE.MeshPhongMaterial( {color: 0x4679BD, side: THREE.DoubleSide}
) );
tabletop.position.x = 300;
tabletop.position.y = 200;
tabletop.position.z = 300;
scene.add( tabletop );
objects.push( tabletop );


// find intersections
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// mouse listener
document.addEventListener( 'mousedown', function( event ) {
    
    // For the following method to work correctly, set the canvas position *static*; margin > 0 and padding > 0 are OK
    mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1;
    mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;
    
    // For this alternate method, set the canvas position *fixed*; set top > 0, set left > 0; padding must be 0; margin > 0 is OK
    //mouse.x = ( ( event.clientX - container.offsetLeft ) / container.clientWidth ) * 2 - 1;
    //mouse.y = - ( ( event.clientY - container.offsetTop ) / container.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0 ) {

            if (spotLight.intensity === 0 && spotLightFacingUp.intensity === 0) {
                spotLight.intensity = 1;
                spotLightFacingUp.intensity = 1;
                pointLightRight.intensity = 1;
                pointLightLeft.intensity = 1;
                lampshadeMaterial.emissive = 0x808030;
            } else {
                spotLight.intensity = 0;
                spotLightFacingUp.intensity = 0;
                pointLightRight.intensity = 0;
                pointLightLeft.intensity = 0;
                lampshadeMaterial.emissive = 0x505010;
            }
        
    }

}, false );

function render() {

    
    renderer.render( scene, camera );

}

(function animate() {

    requestAnimationFrame( animate );

    render();

})();




