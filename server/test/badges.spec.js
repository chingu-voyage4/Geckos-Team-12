"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");
let badge_id = "";
let token = "";
let user = {
  username: "simpleseed_api_tester@seed.com",
  password: "simpleseed_api_tester"
};
describe("BADGES", () => {
  before(done => {
    request(app)
      .post(`/auth/signin`)
      .send(user)
      .expect(res => {
        assert(res.status === 200);
        assert(res.body.token);
        token = res.body.token;
      })
      .end(done);
  });
  //┌——————————————————————————————————————————————————┐
  //│ ↓ BADGES                                        ↓ │
  //└——————————————————————————————————————————————————┘
  describe("#POST BADGES", () => {
    it("Successfully create a badge", done => {
      const body = {
        name: "test_badge1",
        short_desc: "this means you know how to seed",
        goal: 200,
        image_url: "jdöioqwjflkjwbvcac"
      };
      request(app)
        .post(`/badges`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          console.log(res.body);
          assert(res.status === 200);
          assert(res.body.message === "Badge successfully added!");
          badge_id = res.body.badge._id;
        })
        .end(done);
    });
    it("Successfully update a badge", done => {
      const body = {
        short_desc: "You have now learned to seed"
      };
      request(app)
        .post(`/badges/${badge_id}`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          console.log(res.body);
          assert(res.status === 200);
          assert(res.body.message === "Badge successfully updated!");
          assert(res.body.badge.short_desc === "You have now learned to seed");
        })
        .end(done);
    });
  });
  describe("#GET BADGES", () => {
    it("Successfully fetch all badges", done => {
      request(app)
        .get(`/badges`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(Array.isArray(res.body));
        })
        .end(done);
    });
    it("Successfully fetch one badge", done => {
      request(app)
        .get(`/badges/${badge_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.name === "test_badge1");
        })
        .end(done);
    });
  });

  describe("#DELETE BADGES", () => {
    it("Successfully deletes a badge", done => {
      request(app)
        .delete(`/badges/${badge_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Badge successfully deleted!");
        })
        .end(done);
    });
  });
});
