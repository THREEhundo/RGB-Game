let numbSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode button listeners
  setupModeButtons();
  //square listeners
  setupSquares();

  reset();
}

function setupModeButtons(){
  for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numbSquares = 3: numbSquares = 6;
      reset();
  });
  }
}

function setupSquares(){
  for(let i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "CORRECT"
      resetButton.textContent = "PLAY AGAIN?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "TRY AGAIN"
    }
    });
  }
}

function reset(){
  //generate all new Colors
  colors = generateRandomColors(numbSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //resets button message to new colors
  resetButton.textContent = "NEW COLORS"
  messageDisplay.textContent = "";
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

//Making all squares the winning color
function changeColors(color){
  //loop through all squares
  for(let i = 0; i < squares.length; i++){
    //change each color to match color
    squares[i].style.backgroundColor = color;
  }
}

//Picking a random number
function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = []
    //repeat num times
    for(let i = 0; i < num; i++){
      //Get random color and push into array
      arr.push(randomColor())
    }
    //return array
    return arr;
}

function randomColor(){
  //pick a red from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
