"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");
let user_id = "";
let username = "tester@gmail.com";
let token = "";
let user = {
  username: "simpleseed_api_tester@seed.com",
  password: "simpleseed_api_tester"
};
describe("USERS", () => {
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
  //│ ↓ USERS                                        ↓ │
  //└——————————————————————————————————————————————————┘
  describe("#POST USERS", () => {
    it("Successfully create a user", done => {
      const body = {
        username: "tester@gmail.com",
        password: "Password@",
        role: "user"
      };
      request(app)
        .post(`/users`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "User successfully added!");
          user_id = res.body.user._id;
        })
        .end(done);
    });
    it("Successfully update a user", done => {
      const body = {
        score: "100"
      };
      request(app)
        .post(`/users/${user_id}`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          console.log(res.body);
          assert(res.status === 200);
          assert(res.body.message === "User successfully updated!");
          assert(res.body.user.score === "100");
        })
        .end(done);
    });
  });
  describe("#GET USERS", () => {
    it("Successfully fetch all users", done => {
      request(app)
        .get(`/users`)
        .set("Authorization", `${token}`)
        .expect(res => {
          console.log("get res:", res.body);
          assert(res.status === 200);
          assert(Array.isArray(res.body));
        })
        .end(done);
    });
    it("Successfully fetch one user", done => {
      request(app)
        .get(`/users/${user_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.username === "tester@gmail.com");
        })
        .end(done);
    });
  });

  describe("#DELETE USERS", () => {
    it("Successfully deletes a user", done => {
      request(app)
        .delete(`/users/${username}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "User successfully deleted!");
        })
        .end(done);
    });
  });
});
