var coursecards = document.getElementsByClassName(course-card)
let firstcard = courseCards[0];
firstcard.addEventListener("click", function() {alert ("card clicked")})
let displayNoneElement = firstcard.querySelectorAll;
if (displayNoneElement.style.display ==="flex");
displayNoneElement.style.display = "none";
} else {
displayNoneElement.style.display = "flex";
}
});

//1. while loop 2. do while 3. for loop
let x = 5;
while (x < 10) {
    console.log(x);
    x = x + 1;
}