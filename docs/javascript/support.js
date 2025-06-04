const openSlidebar = document.getElementById("openSlidebar");
const slidebar = document.getElementById("slidebar");
const closeSliderbar = document.getElementsByClassName("closeSliderbar");

// slider open/close

openSlidebar.addEventListener('click',()=>{
    slidebar.classList.add("w-full")
    slidebar.classList.remove("w-0")
})

Array.from(closeSliderbar).forEach((btn)=>{
    btn.addEventListener('click',()=>{
        slidebar.classList.add("w-0")
        slidebar.classList.remove("w-full")
    })
})