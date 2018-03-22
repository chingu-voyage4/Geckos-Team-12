"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");

describe("PING", () => {
  //┌——————————————————————————————————————————————————┐
  //│ ↓ PING                                         ↓ │
  //└——————————————————————————————————————————————————┘
  describe("#GET ping", () => {
    it("returns pong", done => {
      request(app)
        .get(`/ping`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.text === "pong");
        })
        .end(done);
    });
  });
});
