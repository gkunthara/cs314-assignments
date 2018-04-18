function scrollToOne() {
    var elmnt = document.getElementById("one");
    elmnt.scrollIntoView();
}

function scrollToTwo() {
    var elmnt = document.getElementById("two");
    elmnt.scrollIntoView();
}

function scrollToThree() {
    var elmnt = document.getElementById("three");
    elmnt.scrollIntoView();
}

function scrollToFour() {
    var elmnt = document.getElementById("four");
    elmnt.scrollIntoView();
}
function scrollToFive() {
    var elmnt = document.getElementById("five");
    elmnt.scrollIntoView();
}

function changeToGreen(){
    var elmnt = document.getElementById("one");
    elmnt.style.backgroundColor = "green";
}

function changeToBlue(){
    var elmnt = document.getElementById("one");
    elmnt.style.backgroundColor = "blue";
}

function changeColor(){
   var elmnt =  document.getElementById("buttonText");
   var section = document.getElementById("two");
   if(elmnt.value == "Click for pink!"){
        elmnt.innerHTML = "Click for orange!";
        elmnt.value = "Click for orange!";
        section.style.backgroundColor = "pink";
   }
   else{
        elmnt.innerHTML = "Click for pink!";
        elmnt.value = "Click for pink!";
        section.style.backgroundColor = "orange";
   }
}

function addToList(){
    var text = document.getElementById("textToAdd").value
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
}

function removeBob(){
    var item = document.getElementById("bob");
    item.parentNode.removeChild(item)
}

function removeTim(){
    var item = document.getElementById("tim");
    item.parentNode.removeChild(item)
}
function removeJack(){
    var item = document.getElementById("jack");
    item.parentNode.removeChild(item)
}
function removeSam(){
    var item = document.getElementById("sam");
    item.parentNode.removeChild(item)
}

function highlightBob(){

    var itemToHighlight = document.getElementById("Bob");

    var item1 = document.getElementById("Tim");
    var item2 = document.getElementById("Jack");
    var item3 = document.getElementById("Sam");

    itemToHighlight.style.backgroundColor = "yellow";

    item1.style.backgroundColor = "lightgray";
    item2.style.backgroundColor = "lightgray";
    item3.style.backgroundColor = "lightgray";

}

function highlightTim(){

    var itemToHighlight = document.getElementById("Tim");
    
    var item1 = document.getElementById("Bob");
    var item2 = document.getElementById("Jack");
    var item3 = document.getElementById("Sam");

    itemToHighlight.style.backgroundColor = "yellow";

    item1.style.backgroundColor = "lightgray";
    item2.style.backgroundColor = "lightgray";
    item3.style.backgroundColor = "lightgray";

}


function highlightJack(){

    var itemToHighlight = document.getElementById("Jack");
    
    var item1 = document.getElementById("Bob");
    var item2 = document.getElementById("Tim");
    var item3 = document.getElementById("Sam");

    itemToHighlight.style.backgroundColor = "yellow";

    item1.style.backgroundColor = "lightgray";
    item2.style.backgroundColor = "lightgray";
    item3.style.backgroundColor = "lightgray";

}

function highlightSam(){

    var itemToHighlight = document.getElementById("Sam");
    
    var item1 = document.getElementById("Bob");
    var item2 = document.getElementById("Tim");
    var item3 = document.getElementById("Jack");

    itemToHighlight.style.backgroundColor = "yellow";

    item1.style.backgroundColor = "lightgray";
    item2.style.backgroundColor = "lightgray";
    item3.style.backgroundColor = "lightgray";

}