const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["green", "red","yellow", "white", "black","brown", "orange",  "rgba(133,122,200)", "#f15025"];

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", () => {
    const getRandom = getRandomColor();
    document.body.style.backgroundColor = colors[getRandom];
    color.textContent = colors[getRandom];
})