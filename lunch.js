$(document).ready(function(){

	function Recipe(name, numberOfPeople, service, ingredients, img, instructions){
			this.id=name;
			this.name = name;
			this.numberOfPeople = numberOfPeople;
			this.service = service;
			this.ingredients = ingredients;
			this.image =img;
			this.instructions = instructions;

	}

	function Ingredient(quantity, measure, item){
			this.quantity = quantity;
			this.measure = measure;
			this.item = item;
	}


	var Ingredient_1 = new Ingredient("3", "Cups", "Water");
	var Ingredient_2 = new Ingredient("1", "TBS", "Salt");
	var Ingredient_3 = new Ingredient("2", "Cups", "Milk");
	var Ingredient_4 = new Ingredient("3", "Items", "Onion");
	var Ingredient_5 = new Ingredient("2", "Items", "Tomato");
	var Ingredient_6 = new Ingredient("2", "Cups", "Oil");


	var Recipe_1 = new Recipe("Passta", "4", "Lunch", [Ingredient_2, Ingredient_1, Ingredient_3], "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqKxGezplikMTcJHVqS8jnhQv1wDGdEgGp-BzeyymhSdLe18cK", "bdshbjcbsjdhsbjcbsd jxansiknaskns asinsaui iqunxiun");
	var Recipe_2 = new Recipe("Sandwich", "2", "Lunch", [Ingredient_4, Ingredient_5, Ingredient_6],"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoi2kCNZhmL_Gl4cAyeu98VyMvf3f134zQyPuutt-ZT8ywiG43", "wjkdw xjnaisk oqwnsoz");
	var Recipe_3 = new Recipe("Chicken", "2", "Lunch", [Ingredient_1, Ingredient_3, Ingredient_6, Ingredient_5], "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1oy6xZwlpO4JcZc9pJ2n2kZ9a5mWgBO7l6nsmZE_LDJ0JrdxxLw", "hbsijxnji jsanksa jnqwinqwnq");
	var recipesArr = [Recipe_1, Recipe_2, Recipe_3];



	var source = $("#listOfRecipes").html();
	var template = Handlebars.compile(source);

	var trackHtml = template({recipes: recipesArr});
	$(".container-full").append(trackHtml);

	$(".container-full").on("click", ".buyItNow", function(event){
		event.preventDefault();
		var itemId=$(this).attr("id");
		console.log(itemId);
		var shopingCart=[];

		$(".container-full").find("#ingredients"+itemId +" p").each(function(item){
			var $p = $(this).text();
			var arrSplit = $p.split("  ");
			shopingCart.push(arrSplit[2]);
			console.log(shopingCart);
		});

	});

	$(".itemToCook").hide();
	$(".item_Quantity").hide();
	$(".item_price").hide();
	


	simpleCart({
			checkout: { 
				type: "PayPal" , 
				email: "you@yours.com" 
			}
	});	

});