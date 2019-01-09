var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	};
	h1.style.backgroundColor = "steelblue";
})


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//cgange colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
})

for(var i=0; i<squares.length; i++){
	//add a color to each square
	squares[i].style.backgroundColor = colors[i];
	//add an event listener to each square
	squares[i].addEventListener("click", function(){
		//grab the square color
	var clickedColor = this.style.backgroundColor;
		//compare with picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		changeColor(pickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play again?"
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
};
function changeColor(color){
	//loop through all square
	for(var i=0; i<squares.length;i++){
		//change color to pickked color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	// add num random colors to array
	for(i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColors());
	}
	//return that array
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}