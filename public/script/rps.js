const playerChoice = document.querySelectorAll(".choice");
console.log(playerChoice);

const player_rock = document.getElementById(p_rock);
const player_paper = document.getElementById(p_paper);
const player_scissor = document.getElementById(p_scissors);

playerChoice.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const selectedByUser = item.id;
    console.log(item.id);
    const domUser = document.getElementById(selectedByUser);
    domUser.style.backgroundColor = "white";
  });
  item.addEventListener("mouseleave", () => {
    const selectedByUser = item.id;
    console.log("tuwing");
    const domUser = document.getElementById(selectedByUser);
    domUser.style.backgroundColor = "";
  });
  item.addEventListener("click", () => {
    const selectedByUser = item.id;
    console.log("keclick");
    const domUser = document.getElementById(selectedByUser);
    domUser.style.backgroundColor = "";
  });
});
