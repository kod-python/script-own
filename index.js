
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
}