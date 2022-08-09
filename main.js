const container = document.querySelector(".container");
const num = document.querySelector(".num");

// making the squares
for (let i = 0; i < 16*16; i++) {
  const square = document.createElement("div");
  square.classList.add("grid-square");
  container.appendChild(square);
  square.addEventListener("mouseover", function () {
    square.classList.add("background");
  });
}