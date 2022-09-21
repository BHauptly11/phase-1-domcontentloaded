document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeText('This is really cool!')
})
    console.log("Before DOM loads");

function changeText(text) {
    let p = document.querySelector('p')
    p.textContent = text
}