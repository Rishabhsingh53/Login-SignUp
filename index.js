const btnSignIn = document.getElementById("btn-signin")
const btnSignUp = document.getElementById("btn-signup")
const banner = document.getElementById("banner")
const banner2 = document.getElementById("banner2")
const slider = document.getElementById("slider")
const slider2 = document.getElementById("slider2")



const handelBanner = () => {

    slider.style.transform = `translateX(${-700}px)`
    slider2.style.transform = `translateX(${-1300}px)`
    banner.style.transform = `translateX(${700}px)`
    banner2.style.transform = `translateX(${-335}px)`


}





const handelBannerReverse = () => {


    slider.style.transform = `translateX(0px)`
    slider2.style.transform = `translateX(0px)`
    banner.style.transform = `translateX(0px)`
    banner2.style.transform = `translateX(0px)`
}

btnSignUp.addEventListener("click", () => handelBannerReverse())
btnSignIn.addEventListener("click", () => handelBanner())