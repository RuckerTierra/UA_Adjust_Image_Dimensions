/* PROJECT: */
// Step 1: create variables to store elements: DONE
// Step 2: create function to change width and height
// Step 3: create function to change the opacity: in progress
// Step 4: testing: in progress
// Step 5: Project: in progress 


// Step 1: create variables to store elements
let widthInput;
let heightInput; 
let opacityInput;


// Step 2: create function to change width and height
function changeDimensions() {
  widthInput = document.getElementById("widthInput").value;
  document.getElementById("image").width = widthInput;
  document.getElementById("widthInput").value = "";

  heightInput = document.getElementById("heightInput").value;
  document.getElementById("image").height = heightInput;
  document.getElementById("heightInput").value = "";
}

// Step 3: create function to change the opacity 
function changeOpacity(){
  if (opacityInput > 0 && opacityInput < 2){
    // opacityInput = document.getElementById("opacityInput").value;
    // opacityInput = document.getElementById("opacityInput").style.opacity.value = ""; 
    // opacityInput = document.getElementById("opacityInput").value = "";
    opacityInput = document.getElementById("opacityInput").value;
    console.log(opacityInput);
  }
}

// function changeOpacity(){
//  opacityInput = document.getElementById("opacityInput").value;
//  console.log(opacityInput);
// }