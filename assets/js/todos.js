//Checking Off Specific Todos By Clicking
//ul lerin icindeki butun li-lara aid olur. gelecek elementlerde buradadir
$("ul").on("click", "li", function() {
	//new version
	$(this).toggleClass("completed")

	//old version
	// //if li is gray
	// if($(this).css("color") == "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none" 
	// 	})
	// } else {
	// 	//property names as string
	// 	// $(this).css({
	// 	// 	"color": "gray",
	// 	// 	"text-decoration": "line-through" 
	// 	// })

	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through" 
	// 	})
	// }
})


//Click on X to delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	//To avoid event bubbling to parents 
	 	event.stopPropagation()
})

//Add new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val()
		//to vacant the input field
			$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})

