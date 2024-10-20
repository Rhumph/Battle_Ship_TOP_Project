const body = document.getElementById("body");

const content = document.createElement("div");
content.classList.add("content");
body.appendChild(content);

const midGrid = document.createElement("div");
midGrid.classList.add("mid-grid");
content.appendChild(midGrid);

const leftGrid = document.createElement("div");
leftGrid.classList.add("left-grid");
content.appendChild(leftGrid);

const title = document.createElement("h2");
title.textContent = "Battleship Game";
midGrid.appendChild(title);

const playerGrid = document.createElement("div");
playerGrid.classList.add("player-grid")
playerGrid.id = "playerGrid";

for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const cell = document.createElement("div");
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.classList.add("grid-item")
    cell.addEventListener("click", handleCellClick);
    playerGrid.appendChild(cell);
  }
}

midGrid.appendChild(playerGrid);

function handleCellClick(event) {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;
  alert(`Clicked cell: Row ${row}, Column ${col}`);
}

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

const onePlayerButton = document.createElement("button");
onePlayerButton.classList.add('player-btn')
onePlayerButton.textContent = "One Player";
onePlayerButton.addEventListener("click", () => {
    alert("One Player mode selected");
});

const twoPlayerButton = document.createElement("button");
twoPlayerButton.textContent = "Two Players";
twoPlayerButton.classList.add('player-btn')
twoPlayerButton.addEventListener("click", () => {
    alert("Two Players mode selected");
});

buttonContainer.appendChild(onePlayerButton);
buttonContainer.appendChild(twoPlayerButton);
leftGrid.appendChild(buttonContainer);
