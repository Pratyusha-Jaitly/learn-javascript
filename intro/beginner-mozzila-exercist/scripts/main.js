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

changeName();
