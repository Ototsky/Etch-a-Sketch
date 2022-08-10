const container = document.querySelector(".container");
const numBtn = document.querySelector(".squares-num");
const resetBtn = document.querySelector(".reset")
// making loop to make the basic shape
function makeTheBasicShape () {
  container.innerHTML = ''
  container.style.cssText = ` grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); `;
  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
}
makeTheBasicShape()
// getting the squares number
// making the squares
numBtn.addEventListener("click", function () {
  container.innerHTML = "";
  let num = Number(prompt("how much squares do you want"));
  container.style.cssText = ` grid-template-rows: repeat(${num}, 1fr); grid-template-columns: repeat(${num}, 1fr); `;
  let exp = num ** 2;
  console.log(exp);
  for (let i = 0; i < exp; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
});


// Adjusting the reset button
resetBtn.addEventListener('click', makeTheBasicShape)