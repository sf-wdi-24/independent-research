$(function() {
	console.log('hello world');

//GLOBALS

//Fluidbox
$('.grid a[rel="lightbox"]').fluidbox();

//isotope init
//Init isotope after all images have loaded
var $grid = $(".grid").imagesLoaded(function(){
	//isotope init
	$grid.isotope({
		itemSelector: ".grid-item",
		percentPosition: true,
		masonry : {
			columnWidth: '.grid-sizer'
		},
	});
});/*closing isotope init*/

});	/*closing loading brace*/





