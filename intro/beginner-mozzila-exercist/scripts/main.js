function changeName() {
  let name = localStorage.getItem("name");

  if (name === null) {
    name = getName();
  }

  localStorage.setItem("name", name);
  const b = document.querySelector("button").onclick;

  const heading = document.querySelector("h1");
  heading.textContent += ` ${name}`;
}

function getName() {
  let name = prompt("Whats your name ?");

  if (name) return name;
  else return getName();
}

const image = document.querySelector("img");

document.querySelector("button").addEventListener("click", () => {
  const attr = image.getAttribute("src");
  if (attr === "images/Mozilla_Firefox_2004_Logo.png")
    image.setAttribute("src", "images/animated-stick-figure-image-0041.gif");
  else image.setAttribute("src", "images/Mozilla_Firefox_2004_Logo.png");
});

changeName();
