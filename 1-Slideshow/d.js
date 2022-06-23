const slidesshowElements = document.querySelectorAll(".slideshow-element");
let countElements = 1;
setInterval(() => {
    countElements++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if(countElements > slidesshowElements.length){
        slidesshowElements[0].classList.add("current");
        countElements = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }  
},2000);