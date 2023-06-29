const btnSignIn = document.getElementById("signin").addEventListener("click",() => {
    const parent = document.getElementById("main-container")
    parent.style.flexDirection = "row-reverse";
})

const btnSignUp = document.getElementById("signup").addEventListener("click",() => {
    const parent = document.getElementById("main-container")
    parent.style.flexDirection = "row";
})
