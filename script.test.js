const { Ship } = require("./script.js"); // Adjust the path if necessary


test("hit function", () => {
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
