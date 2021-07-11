import { solve } from "./solve.js";

export async function animateSolution(board) {
    var animations = solve(board, []);
  
    if (animations) {
      for (const anim of animations) {
        var animSpeed = document.getElementById("animSpeed").value;
        console.log("animSpeed: ", animSpeed ** 2);
        await animateCell(anim, animSpeed);
      }
      return;
    }
  }
  
  const animateCell = (anim, animSpeed) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById(anim.cell).style.backgroundColor = anim.color;
        document.getElementById(anim.cell).innerText =
          anim.number == 0 ? "" : anim.number;
        resolve();
      }, animSpeed ** 2);
    });
  };