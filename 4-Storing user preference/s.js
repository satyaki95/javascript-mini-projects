
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const setValue = (fontSize,bgColor) => {
    selectFontSize.value = fontSize;
        selectBgColor.value = bgColor;
        mainElement.style.backgroundColor = bgColor;
        mainElement.style.fontSize = fontSize;
}

// load local storage value

const initialSetup = () => {
    const fontSize = localStorage.getItem("fontSize");
    const bgColor =localStorage.getItem("bgColor");


    if(bgColor && fontSize){
        setValue(fontSize,bgColor);
    }
    
    if(!bgColor && !fontSize){
        setValue("16px","aqua");
    }
    if(!bgColor && fontSize){
        setValue(fontSize,"aqua");
    }
    if(bgColor && !fontSize){
        setValue("16px",bgColor);
    }
    
}


// change font size

const changeFontSize = (event) => {
    const selectFontSize = event.target.value;
    mainElement.style.fontSize = selectFontSize;
    localStorage.setItem("fontSize",selectFontSize);
}
// change background colour

const changeBgColor = (event) => {
    const selectBgColor = event.target.value;
    mainElement.style.backgroundColor = selectBgColor;
    localStorage.setItem("bgColor",selectBgColor);
}
// clear local storage

const clearLocalStorage = () => {
    
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValue("16px","aqua");
}

// add evevnt listeners

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);

initialSetup();