var dom = document.getElementById("dom");
//dom.innerHTML = "Ruth is the course rep";
//dom.style.color = "red";
//dom.style.fontSize = "30px";
//dom.style.backgroundColor = "#0f0f0f";
//dom.style.display = "none";
dom.style.display = "flex";
para.style.display = "none";
dom.addEventListener("click", function () {para.style.display ="none"; dom.innerHTML = para.style.display;});

//function addition(parameters){body of the fnction}
//creating afunction
function addition(input) {
    let x = input;
    let y =50;
     let z = x + y;
     return z;
   // alert(z);
}
//calling a function: name()
addition(300);
var res = addition(20);
//alert(res);
let bankAccount = 50000;
if (bankAccount ==60000)
{
    alert ("I am coming to Nigeria");
} 
else if(bankAccount ==70000)
    {
    alert("I am going to Korea");
} else if (bankAccount <20000){
    alert ("I am staying at home");
} else {
   // alert("do anything at all");
}
    let girlName = "rose";
    if (girlName =="Rose") {
        alert("red flag");
    } else if (girlName == "Josephine"){
        alert("Bounce");
    } else {
    // alert("marry");
    }

    function tripplanner(distance){
        let h = distance/40;
        let m = h * 60;
        return m;
    }
let myplan = tripplanner(150);
