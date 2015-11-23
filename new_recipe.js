$(document).ready(function(){

	function Recipe(name, numberOfPeople, service, ingredients, img, instructions){
		this.name = name;
		this.numberOfPeople = numberOfPeople;
		this.service = service;
		this.ingredients = ingredients;
		this.image =img;
		this.instructions = instructions;

	}

	function Ingredient(measure, quantity, item){
		this.quantity = quantity;
		this.measure = measure;
		this.item = item;
	}

	var ingredients = [{ingredient:"Tomato"}, {ingredient:"Cucambers"}, {ingredient:"Milk"}, {ingredient:"Soy source"}, {ingredient:"Suger"}, {ingredient:"Water"}, {ingredient:"Honey"}, {ingredient:"Salt"}, {ingredient:"Garlic"}, {ingredient:"Onion"}, {ingredient:"Pepper"}, {ingredient:"Flour"}, {ingredient:"Basil"}];
	var recipes = [];

	var source = $("#listOfIngredients").html();
	var template = Handlebars.compile(source);

	var trackHtml = template({items:ingredients});
	$("#allTheIngredients").append(trackHtml);


	Sortable.create(selectedIngredients, {
	  group: {name:'selectedIngredients',
	  		  put:['allTheIngredients']},
	  animation: 100
	});

	Sortable.create(allTheIngredients, {
	  group: {name:'allTheIngredients',
	  		  pull: 'clone',
	  		  put: ['selectedIngredients']},
	  animation: 100
	});
	$("#newRecipeForm").on("submit", function(event){
		event.preventDefault();

		var name = $("#nameOfRecipe").val();
		var numberOfPeople = $("#numberOfPeople").val();
		var ingredients = [];
		var singelIngredient={};
		var img = $("#dishImage").val();
		var instructions = $("#instructions").val();
		var service = $("#service").val();

		$("#selectedIngredients li .rowItem").each(function(item){
			singelIngredient = new Ingredient($(this).find(".howToMeasure .measure").val() ,$(this).find(".quantity .quantityOfItem").val() ,$(this ).find(".item p").text());
			ingredients.push(singelIngredient);
		});

		var recipe = new Recipe(name, numberOfPeople, service, ingredients ,img, instructions);
		console.log(recipe);
		recipes.push(recipe);
		$("#nameOfRecipe").val("");
		$("#numberOfPeople").val("");
		$("#selectedIngredients .newIngredient").remove();
		$("#dishImage").val("");
		$("#instructions").val("");

	});

});
