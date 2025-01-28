/*for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  

  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }


  for (let i = 2; i <= 40; i += 2) {
    console.log(i);
  }

 /* function even(para) {
   if (para%2 === 0) {
        return "even";
  }
 else { return "odd"; }}

  console.log(even(6));*/

  /*for (let i = 1; i <= 100; i++) {
    
     if(i % 3 === 0 && i % 5 === 0)
        { console.log("FIZZBUZZ");}
    else if( i % 3 === 0)
       {console.log("FIZZ");}
  
    else if( i % 5 === 0)
  {console.log("BUZZ");}

  else { console.log(i); }
}*/

/*const input = document.getElementById("input");
const Celcius = document.getElementById("Celcius");
const Fah = document.getElementById("Fah");
const Sub = document.getElementById("Sub");
const Result = document.getElementById("Result");
let temp;

Sub.onclick = function(){ 
if(Fah.checked) {
    temp = parseInt(input.value);
    temp = (temp -32) * 5/9;
    Result.textContent = temp.toFixed(1) + "°C";

}

else if(Celcius.checked) {
    temp = parseInt(input.value);
    temp = temp * 9/5 +32;
    Result.textContent = temp.toFixed(1) + "°F";
}

else {Result.textContent = "select a unit"}}*/

/*let colors = ["black", "blue", "green", "yellow", "white"]

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

colors.push("orange");
colors.unshift("tangerine");

colors[3] = "purple";
console.log(colors);

function greeting(name) 
{ console.log(`my name is ${name}`); }

greeting ("emem");*/

/*function sum(x, y){
  return x + y;
}

console.log(sum(3, 5)); // Outputs: 8

sum(4, 7)

const add = (x, y) => x - y;
console.log(add(23, 3));*/

/*function add(a, b){
  return a + b;
}
let total = add(4, 5);
console.log(`this is the ${total}`);*/

for(let i = 60; i>=20; i-- ){
  console.log(i);
}

/*function checker(para){
  if (para %2 === 0) {return "even";}
  else{return "odd";}}

  console.log(checker(97));*/

  /*function sum(n){
     return (n * (n + 1)) / 2;
    }
  console.log(sum(5));*/

  /*/

 /*function tofahrenheit(celcius) {
      return (celcius * 9 / 5) + 32;
 }
 console.log(`from celcius to F ${tofahrenheit(37)}`);*/

 /*let words = ["i", "love", "my", "wife"];
 let sentence = words.join(" ");
 console.log(sentence);

 let str = "apple mango oranges";
 let arr = str.split(" ");
 console.log(arr);

 const newWords = words.splice(1,2);
 console.log(newWords);
 console.log(words);

 let fruit = ["apple", "beans", "mango", "tangerine", "mango", "apple"];
fruit.forEach*/

/*function d(w, h,){
  return (w * h);
 }
console.log(d(5, 10));
console.log(d(56, 10));

/*function sum(n){
  return (n * (n + 1)) / 2;
 }
console.log(sum(100));

function tofahrenheit(celcius) {
  return (celcius * 9 / 5) + 32;
}
console.log(`from celcius to F ${tofahrenheit(37)}`);*/


/*let fruits = ["banana", "apple", "pawpaw", "orange", "kiwi", "peach"];
fruits.splice(2,3,"pineapple", "purple hibiscus", "guava");

console.log(fruits);*/

let nam = ["emem","veronica","esther","uche","miracle","victor"];
console.log(nam.indexOf());

let words = ["i ","hate","you"];
let sentence = words.join("*" );
console.log(sentence);