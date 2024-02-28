const toglleButton=document.querySelector(".toggle-btn");
const backroundBody=document.querySelector("body");
const BackgroundOfBody=document.querySelector("body");
const h1=document.querySelector(".Heading");
toglleButton.addEventListener('click' ,()=>{
    // console.log("hellow");

    toglleButton.classList.toggle("toggled");
    if(backroundBody.style.background==="black"){
        backroundBody.style.background="white";
        h1.style.color="black";
        
    }else{
        backroundBody.style.background="black";
        h1.style.color="white";
    }

})


