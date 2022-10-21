"use strict"
const query = function (tagName) {
    const selector = document.querySelector(tagName);
    return selector;
  };
  const create = function (tagName) {
    const newElement = document.createElement(tagName);
    return newElement;
  };
function ddselect () {
    var d=document.getElementById("module");
    var displaytext=d.options[d.selectedIndex].text;
    document.getElementById("txtvalues").value =  displaytext;
}
// ==== //

// 
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// 
function myFunctionMeat() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckmeat");
  // Get the output text
  var text = document.getElementById("text-meat");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
 
// 
function myFunctionZaytun() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckZaytun");
  // Get the output text
  var text = document.getElementById("text-zaytun");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// 
function myFunctionCucumber() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckCucumber");
  // Get the output text
  var text = document.getElementById("text-cucumber");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// 
function myFunctionMushroom() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckMushroom");
  // Get the output text
  var text = document.getElementById("text-mushroom");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// 
function myFunctionGas() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckGas");
  // Get the output text
  var text = document.getElementById("text-gas");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


function myFunctionSour() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckSour");
  // Get the output text
  var text = document.getElementById("text-sour");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunctionSausage() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheckSausage");
  // Get the output text
  var text = document.getElementById("text-sausage");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}