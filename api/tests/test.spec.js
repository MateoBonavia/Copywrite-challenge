const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../src/app.js");

var agent = null;

describe("GET /iecho", function () {
  beforeEach(() => {
    agent = session(app);
  });

  it("GET /iecho should get 200", function (done) {
    agent.get("/iecho").send({ text: "Hola" }).expect(200).end(done);
  });
  it("GET /iecho should reverse the word", function (done) {
    agent.get("/iecho").send({ text: "Hola" }).expect("aloH").end(done);
  });
});
