const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("enhancer", () => {
    describe("repair()", () => {
      it("restore to 100 damage", () => {
        expect(
          enhancer.repair({ name: "Sword", durability: 40, enhancement: 0 })
        ).toEqual({
          name: "Sword",
          durability: 100,
          enhancement: 0
        });
      });
      it("restore to 100 damage", () => {
        expect(
          enhancer.repair({ name: "Sword", durability: 10, enhancement: 0 })
        ).toEqual({
          name: "Sword",
          durability: 100,
          enhancement: 0
        });
      });
    });
    describe("succeed()", () => {
      it("succeed to enhance 14", () => {
        expect(
          enhancer.succeed({ name: "Sword", durability: 100, enhancement: 0 })
        ).toEqual({ name: "Sword", durability: 100, enhancement: 1 });
      });
      it("Not go over 20", () => {
        expect(
          enhancer.succeed({ name: "Sword", durability: 100, enhancement: 20 })
        ).toEqual({ name: "Sword", durability: 100, enhancement: 20 });
      });
      it("succeed to enhance 15", () => {
        expect(
          enhancer.succeed({ name: "Sword", durability: 100, enhancement: 14 })
        ).toEqual({ name: "Sword", durability: 100, enhancement: 15 });
      });
      it("succeed to enhance 11", () => {
        expect(
          enhancer.succeed({ name: "Sword", durability: 100, enhancement: 10 })
        ).toEqual({ name: "Sword", durability: 100, enhancement: 11 });
      });
    });
    describe("failed()", () => {
      it("failed to enhance to 13", () => {
        expect(
          enhancer.fail({ name: "Sword", durability: 100, enhancement: 12 })
        ).toEqual({ name: "Sword", durability: 95, enhancement: 12 });
      });
      it("failed to enhance to 20", () => {
        expect(
          enhancer.fail({ name: "Sword", durability: 100, enhancement: 20 })
        ).toEqual({ name: "Sword", durability: 90, enhancement: 19 });
      });
    });
    describe("get()", () => {
      it("get item with 0", () => {
        expect(
          enhancer.get({ name: "Sword", durability: 100, enhancement: 0 })
        ).toEqual({ name: "Sword", durability: 100, enhancement: 0 });
      });
      it("get item with 10", () => {
        expect(
          enhancer.get({ name: "Sword", durability: 100, enhancement: 10 })
        ).toEqual({ name: "[+10] Sword", durability: 100, enhancement: 10 });
      });
      it("get item with 20", () => {
        expect(
          enhancer.get({ name: "Sword", durability: 100, enhancement: 20 })
        ).toEqual({ name: "[+20] Sword", durability: 100, enhancement: 20 });
      });
    });
  });
});
