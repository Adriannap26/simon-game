import { game } from "../game";

beforeAll(() => {
    let fs = require("fs");
    let filecontent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(filecontent);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});