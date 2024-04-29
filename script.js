let imag = document.querySelectorAll(".imag");
let faangleright = document.querySelector(".fa-angle-right");
let faangleleft = document.querySelector(".fa-angle-left");
let laoder = document.querySelector(".loader");
let num=0;

faangleright.addEventListener("click",()=>
{
    imag.forEach((image)=>
    {
        image.classList.remove("active");
    })
    num = (num+1) % imag.length;

    imag[num].classList.add("active");
})
faangleleft.addEventListener("click",()=>
{
    imag.forEach((image)=>
    {
        image.classList.remove("active");
    })
    num = (num-1+imag.length) % imag.length;
    imag[num].classList.add("active");
});

