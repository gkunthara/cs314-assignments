function trueOrFalse() {
    
    if(confirm("True or False?")){
        console.log("true")
    }
    else{
        console.log("false")
    }
}

function trueOrFalseTernary(){
    confirm("True or False?") ? console.log("true") : console.log("false");
}

function enterNumber(){
    let input = prompt("Enter a number");
    if(input === null)
    {
        alert("ok...")
    }
    else{
        input = parseInt(input * 1);
    }
    if(isNaN(input)){
        alert("whoaaa that's not a number")
    }
    
    else if(input == 0){
        alert("fine, don't input anything")

    }
    else if(input === null){
    }
    else{
        alert("it's a number!")
    }
        
}

function makeObj1(first, middle, last){

        this.firstName =  first,
        this.middleName = middle,
        this.lastName = last,
        this.fullName = function() {return this.firstName + " " + this.middleName + " " + this.lastName;}

}

let person = new makeObj1("George", "Joseph", "Kunthara");
console.log("first person " + person);
console.log("first person's last name is: " + person.lastName);


let person2 = Object.assign({age: 21}, person);
console.log("second person" + person2);
console.log("second person's last name is: " + person2.lastName);
console.log("second person's age: " + person2.age);


// function myFunction(str1, str2, str3){
//     str3 = str3 || "";
//     str = str1 + str2 + str3;
//     return str
// }

// let str = function(str1, str2, str3) {
//     str3 = str3 || "";
//     return str1 + str2 + str3;
// }

let str = (str1, str2, str3) => { return str1 + str2 + (str3 || "")}

console.log(str("bee", "boo", "bop"))
// console.log(myFunction("bee", "boo"))


