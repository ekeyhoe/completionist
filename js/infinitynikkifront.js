import { backToMainButton } from "./main.js";

backToMainButton("backbutton");

function createEurekaTable(title, colours, containerId) {
  const parent =
    typeof containerId === "string"
      ? document.querySelector(containerId)
      : containerId;

  if (!parent) {
    console.error("Container not found.");
    return;
  }

  // ----- Load previous state from localStorage -----
  let savedState = JSON.parse(localStorage.getItem("eurekaTableState") || "{}");

  // ----- Remove previous table if exists -----
  const oldWrapper = parent.querySelector(".sitecontainer");
  if (oldWrapper) parent.removeChild(oldWrapper);

  // ----- Create table wrapper -----
  const wrapper = document.createElement("div");
  wrapper.classList.add("sitecontainer");

  // ----- Table Title -----
  const heading = document.createElement("h2");
  heading.textContent = title;
  heading.classList.add("table-heading");
  wrapper.appendChild(heading);

  const table = document.createElement("table");
  table.classList.add("table");

  // ----- Table Header -----
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Colour", "Head", "Hands", "Feet"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // ----- Table Body -----
  const tbody = document.createElement("tbody");

  colours.forEach((colour) => {
    const row = document.createElement("tr");

    // Colour image cell
    const colourCell = document.createElement("td");
    const colourImg = document.createElement("img");
    colourImg.src = `/images/infinitynikki/iconcolours/${colour.toLowerCase()}Icon.png`;
    colourImg.alt = colour;
    colourImg.classList.add("colour-icon");
    colourCell.appendChild(colourImg);
    row.appendChild(colourCell);

    // ----- Item Buttons -----
    ["head", "hands", "feet"].forEach((part) => {
      const cell = document.createElement("td");
      const key = `${title}-${part}-${colour}`.toLowerCase();

      // Ensure the key exists in savedState
      if (savedState[key] === undefined) savedState[key] = false;

      const button = document.createElement("button");
      button.classList.add("eureka-button");

      const img = document.createElement("img");
      img.src = `/images/infinitynikki/eurekas/${key}.jpg`;
      img.classList.add("eureka-icon");
      button.appendChild(img);

      // Apply saved state from localStorage
      if (savedState[key]) button.classList.add("active");

      // Toggle state on click
      button.addEventListener("click", () => {
        savedState[key] = !savedState[key];
        button.classList.toggle("active", savedState[key]);
        localStorage.setItem("eurekaTableState", JSON.stringify(savedState));
      });

      cell.appendChild(button);
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  wrapper.appendChild(table);
  parent.appendChild(wrapper);
}

// ----- First render -----
createEurekaTable(
  "Afterglow",
  ["yellow", "green", "red", "pink", "iridescent"],
  "#table1",
);
