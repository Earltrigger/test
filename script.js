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

const input = document.getElementById("input");
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

else {Result.textContent = "select a unit"}}