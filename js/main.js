function setUpGameButton(gameName, rowId) {
  const container = document.getElementById(rowId);

  if (!container) {
    console.error(`Row number "${rowId}" not found.`);
    return;
  }

  // Create button
  const button = document.createElement("button");
  button.classList.add("gamecontainer");

  // Create image
  const img = document.createElement("img");
  img.src = `images/logos/logo${gameName}.jpg`;
  img.alt = `${gameName} logo`;
  img.classList.add("gameimage");

  // Add click behaviour
  button.addEventListener("click", function () {
    window.location.href = `${gameName}.html`;
  });

  // Assemble
  button.appendChild(img);
  container.appendChild(button);
}

export function backToMainButton(id) {
  const container = document.getElementById(id);
  // Create button
  const button = document.createElement("button");
  button.classList.add("backbutton");

  // Backarrow
  const arrow = document.createElement("span");
  arrow.textContent = "←";
  arrow.classList.add("gameimage");

  // Add click behaviour
  button.addEventListener("click", function () {
    window.location.href = `index.html`;
  });

  // Assemble
  button.appendChild(arrow);
  container.appendChild(button);
}

setUpGameButton("heartopia", "row1");
setUpGameButton("infinitynikki", "row1");
setUpGameButton("warframe", "row1");
