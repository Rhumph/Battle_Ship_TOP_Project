const { Ship, Gameboard, Player } = require("./script.js");

test("beenHit & Sunk function", () => {
    const ship = new Ship(3);
    ship.beenHit();
    expect(ship.hitNo).toBe(1);
    expect(ship.sunkStatus).toBe(false);

    ship.beenHit();
    expect(ship.hitNo).toBe(2);
    expect(ship.sunkStatus).toBe(false);

    ship.beenHit();
    expect(ship.hitNo).toBe(3);
    expect(ship.sunkStatus).toBe(true);
});

test("Gameboard creation", () => {
    const gameboard = new Gameboard(10);
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
    expect(gameboard.miss).toEqual([]);
    expect(gameboard.hit).toEqual([]);
    expect(gameboard.shipCoordinates).toEqual([]);
    expect(gameboard.fleetSunkV).toBe(false);
});

test("placeShip function", () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(3);
    gameboard.placeShip([0, 0], ship);
    expect(gameboard.board[0][0]).toBe(ship);
});

test("receiveAttack function - miss", () => {
    const gameboard = new Gameboard(10);
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.miss.length).toBe(1);
    expect(gameboard.hit.length).toBe(0);
});

test("receiveAttack function - hit", () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(3);
    gameboard.placeShip([0, 0], ship);
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.hit.length).toBe(1);
    expect(gameboard.miss.length).toBe(0);
    expect(ship.hitNo).toBe(1);
});

test("fleetSunkF function", () => {
    const gameboard = new Gameboard(10);
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    gameboard.placeShip([0, 0], ship1);
    gameboard.placeShip([1, 1], ship2);
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 1]);
    gameboard.fleetSunkF();
    expect(gameboard.fleetSunkV).toBe(true);
});

test("playerTurn function", () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(1);
    gameboard.placeShip([0, 0], ship);
    gameboard.playerTurn([0, 0]);
    expect(gameboard.hit.length).toBe(1);
    expect(gameboard.fleetSunkV).toBe(true);
});

test("PLayer creation", () => {
    const player = new Player("human");
    expect(player.type).toBe("human");
    expect(player.gameboard).toBeInstanceOf(Gameboard);
});
