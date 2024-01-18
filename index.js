
let student = "come";

let age = 22;

let result = age +1;


console.log(age);
console.log(student);
console.log(result);



let credentials;

document.getElementById("button").onclick = function(){
    credentials = document.getElementById("mytext").value;

    document.getElementById("label").innerHTML ="my credentials are " + credentials;
    console.log(credentials)

};


let a;
let b;
let c;



document.getElementById("submitbutton").onclick = function(){

    a = document.getElementById("texta").value;
    a = Number(a);

    b = document.getElementById("textb").value;
    a = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("c").innerHTML = "the answere is " + c;


};




let count = 0;


document.getElementById("decrease").onclick = function(){

    count-=1

    document.getElementById("count").innerHTML = count;
}


document.getElementById("reset").onclick = function(){

    count=0

    document.getElementById("count").innerHTML = count;
}

document.getElementById("increase").onclick = function(){

    count+=1

    document.getElementById("count").innerHTML = count;
};



let bro = "kod"
let money = 200
let come = "home"

let outcome = `the amonut of money is ${money} and your name is${bro} and will be coming ${come} today`

document.getElementById("mylabel").innerHTML= outcome;



// tolocalstring method

// let myNUm = 233345.68762;
let myNUm = 100;

//  myNUm = myNUm.toLocaleString("en-US",{style: "currency", currency:"USD"})

//  myNUm = myNUm.toLocaleString("de-DE",{style: "currency", currency:"EUR"})

// myNUm = myNUm.toLocaleString("undefine", {style: "percent"})

myNUm = myNUm.toLocaleString("undefine", {style:"unit", unit:"celsius"})

document.getElementById("localTime").innerHTML =`the persentage is ${myNUm}`

// tolocalstring method ends here

// Guessing game

const anser = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){
    let guess = document.getElementById("guessNum").value;
    guesses+=1

    if(guess == anser){
     alert(`${anser} and it took you #.to ${guesses} guesses`);
}

   else if(guess < anser){
    alert("too small");
   }

   else {
    alert("Too large")
   }
};

// gaming ends here


// Temperature checking

document.getElementById("submittButton").onclick = function (){

     let temp;

     if(document.getElementById("cButton").checked){
        temp = document.getElementById("textLabel").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = `${temp} C`
     }


     else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textLabel").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = `${temp} F`
     }


     else{
       
        document.getElementById("tempLabel").innerHTML = `select a unit`
     }






    }


    function toCelsius(temp){
        return (temp - 32) * (5/9);
    };

    function toFahrenheit(temp){
        return temp * 9 / 5 + 32;
    };

    // temperature ends here
    

    // array starts here

    let fruits = ["apple","banana","watermelon"]

    fruits[0] = ["cocconut"]
    // add items from the end
    fruits.push("lemon")
    // delete items from the end
    fruits.pop()
    // add element from the begging
    fruits.unshift("mango") 
    
    // remove methods from beggining
    fruits.shift()

    let lenght = fruits.length
    let index = fruits.indexOf("banana")


    console.log(fruits);
    console.log(lenght);
    console.log(index);

    document.getElementById("array").innerHTML = `${fruits} ${length} ${index}`

// for statement starts here
    let prices = [5,7,8,9,20];

    for(let price of prices){
        console.log(price)
    }

    let things = ["mango","apple","banana","watermelon"]
    //  arrange from frist alphabet
     things.sort()
     things.sort().reverse()
    for(let thing of things){
        console.log(thing)
    }
    
    document.getElementById("array2").innerHTML = `${prices} ${things}`


    // 2d arrays starts here
    let meat = ["egg","fish","chicken"]
    let vegtable = ["carrot","onions","potatoe"]
    let ingre = ["ginger","garlic","pepre"]

    let grocery = [meat,vegtable,ingre]
    
    grocery.sort()

    grocery[2][1]= ["wintia"]
   for (let list of grocery){
    for(let food of list){
        console.log(food)
    }
   }

   document.getElementById("array3").innerHTML = `${grocery}`

    // 2d ends here


// spread operator

let numbers = [1,2,3,4,5,6,7,8,10]

let num = Math.max(...numbers)
console.log(num)

let class1 = ["sponge","akoutsa","ama","yaw"]
let class2 = ["akpa","yibor","kalami","afi"]
let allclass =[class1,class2]
class1.push(...class2)

console.log(...class1)

document.getElementById("array4").innerHTML = `${num} ${allclass}`
// spread operator ends here


 // for ends here 

// array ends here