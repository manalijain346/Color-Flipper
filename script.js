const colorCodes = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#CCCCFF", "#6495ED", "#40E0D0"];
const clickBtn = document.getElementById("btn");
const colorLabel = document.getElementById("colorCode");
const main = document.querySelector(".main");

clickBtn.addEventListener('click', changeBackground);

function changeBackground() {
    let randomNum = Math.floor(Math.random() * colorCodes.length);
    var colorValue = colorCodes[randomNum];
    colorLabel.textContent = colorValue;
    main.style.backgroundColor = colorValue;
}                                  