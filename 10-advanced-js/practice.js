const btn = document.createElement("button");
btn.textContent = "click me!";

btn.style.backgroundColor = "red";
btn.style.color = "white";

document.body.prepend(btn);

const p = document.querySelector("p");
p.classList.add("new-para");
