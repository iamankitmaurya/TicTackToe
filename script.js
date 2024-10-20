console.log("hello script");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector("#msg");
let cont = document.querySelector(".container");
console.log(boxes);

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "green";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "red";
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let Pattern of winPattern) {
    let pos1 = boxes[Pattern[0]].innerText;
    let pos2 = boxes[Pattern[1]].innerText;
    let pos3 = boxes[Pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
const showWinner = (pos1) => {
  msg.innerText = `Congratulations , Winner is ${pos1}  `;
  cont.classList.remove("hide");
  closeAllBtn();
};
const closeAllBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


