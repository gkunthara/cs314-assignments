function charSwap(){
    let input = prompt("Enter input string: ");

    if(input == null){
        console.log("ok no input")
    }
    else if(input.length <= 1){
        console.log("input not long enough!")
    }
    else{
        let firstChar = input.charAt(0); //first char
        let lastChar = input.charAt(input.length - 1); //last char
        let temp = firstChar; //temp variable for swap
        firstChar = lastChar;
        lastChar = temp;
        let newInput = firstChar + input.slice(1, input.length - 1) + lastChar;
        alert(newInput);
    }
}

function hiString(){

    let input = prompt("Enter input string: ");

    if(input == null){
        console.log("ok no input")
    }
    else if(input.length <= 1){
        console.log("input not long enough!")
    }
    // if first two letters begin with 'Hi'
    else if(input.slice(0,2) == "Hi"){
        alert(input);
    }
    else{
        let newString = "Hi" + input;
        alert(newString);
    }
}

function threeCharsToFront(){

    let input = prompt("Enter input string: ");

    if(input == null){
        console.log("ok no input")
    }
    else if(input.length < 3 ){
        console.log("input not long enough!")
    }
    else{
        let lastChars = input.slice(-3); //last three chars
        let newString = lastChars + input.slice(0, input.length - 3);
        alert(newString);
    }
}

function stringToSentences(){
    let input = prompt("Enter comma separated list: ");
    let arr = input.split(",");
    if(input == null){
       return console.log("ok no input")
    }
    else if(arr.length != 3){
        alert("incorrect input length!")
    }
    else{
        newArray = arr.map(s => s.trim()); //remove leading whitespaces
        alert(`My favorite color is ${newArray[0]}, ${newArray[1]} are awesome, and I love ${newArray[2]}`);
    }
}

function upperOrLower(){

    let input = prompt("Enter input string: ");
    if(input == null){
        alert("ok no input")
    }
    else if(input.length < 3){
        alert(input.toUpperCase());
    }
    else{
        let firstChars = input.slice(0, 3).toLowerCase(); //grab first three chars and make lowercase
        alert(firstChars + input.slice(3));
    }
}

function integerSwap(){

    let input = prompt("Enter comma separated list: ");
    let arr = input.split(",");
    if(input == null){
        alert("ok no input")
    }
    else if(arr.length < 2){
        alert("enter longer list!")
    }
    else{
        let temp = arr[arr.length - 1]; //temp variable is last element
        arr[arr.length - 1] = arr[0];
         arr[0] = temp;
        alert(arr.join());
    }
}

function longestString(){
    let input = prompt("Enter comma separated list: ");
    let arr = input.split(",");
    let newArray = arr.map(s => s.trim());
    if(input == null){
        alert("ok no input")
    }
    else{
        longest = newArray[0];

        //loop through list comparing two elements for which is longer
        for(i = 1; i < newArray.length; i++){
            if(longest.length < newArray[i].length){
                longest = newArray[i];
            }
        }
        alert(longest);
    }
}

function largestEvenNumber(){
    let input = prompt("Enter comma separated list: ");
    let arr = input.split(",");
    let newArray = arr.map(s => Number(s)); //convert strings to numbers
    newArray = newArray.filter(n => n % 2 == 0); //filter to only have even numbers
    largest = newArray[0];

    //loop through comparing two elements and choosing which is larger
    for(i = 1; i < newArray.length; i++){
        if(largest < newArray[i]){
            largest = newArray[i];
        }
    }
    alert(largest);
}

function currentDayTime(){
    let today = new Date();
    let hour = today.getHours();
    let meridian = ""

    //if hour is in the PM, convert to normal time
    if(hour > 12){
        hour = hour - 12
        meridian = "PM"
    }
    else{
        hour = hour
        meridian = "AM"
    }
    let minute = today.getMinutes();
    let msg = hour + ":" + minute;
    day = today.getDay();
    weekday = ""
    
    //convert number of day given to actual name of day
    switch(day){
        case 1:
            weekday = "Monday"
            break;
        case 2:
            weekday = "Tuesday"
            break;
        case 3:
            weekday = "Wednesday"
            break;
        case 4:
            weekday = "Thursday"
            break;
        case 5:
            weekday = "Friday"
            break;
        case 6:
            weekday = "Saturday"
            break;
        case 7:
            weekday = "Sunday"
            break;
    }

    alert("Today is " + weekday + '.' + '\n' + "It is " + msg + meridian + '.')
}

function unlimited(...args){
    alert("unlimited Arguments: " + args.join(""))
}

unlimited("psdf", "sdfdsf", "tyuyt", "fgnbfgn")