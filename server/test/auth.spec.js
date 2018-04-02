"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");
let user = {
  username: "simpleseed_api_tester2@seed.com",
  password: "simpleseed_api_tester2"
};
let token = "";
describe("AUTH", () => {
  after(done => {
    console.log("token", token);
    request(app)
      .delete(`/users/${user.username}`)
      .set("Authorization", `${token}`)
      .expect(res => {
        assert(res.status === 200);
      })
      .end(done);
  });
  describe("SignUp", () => {
    // it.skip("should not send post if missing username", done => {
    //   let body = {
    //     username: user.username
    //   };
    //   request(app)
    //     .post("/auth/signup")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 400);
    //     })
    //     .end(done);
    // });
    // it.skip("should return 401 if bad password", done => {
    //   let body = {
    //     username: user.username,
    //     password: "badpassword"
    //   };
    //   request(app)
    //     .post("/auth/signup")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 401);
    //     })
    //     .end(done);
    // });
    // it.skip("should return 401 if bad username", done => {
    //   let body = {
    //     username: "badusername@bad.com",
    //     password: user.password
    //   };
    //   request(app)
    //     .post("/auth")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 401);
    //     })
    //     .end(done);
    // });
    it("should return 200 if good credentials", done => {
      let body = {
        username: user.username,
        password: user.password
      };
      request(app)
        .post("/auth/signup")
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.token);
          token = res.body.token;
        })
        .end(done);
    });
  });
  describe("SignIn", () => {
    // it.skip("should not send post if missing username", done => {
    //   let body = {
    //     username: user.username
    //   };
    //   request(app)
    //     .post("/auth/signin")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 400);
    //     })
    //     .end(done);
    // });
    // it.skip("should return 401 if bad password", done => {
    //   let body = {
    //     username: user.username,
    //     password: "badpassword"
    //   };
    //   request(app)
    //     .post("/auth/signin")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 401);
    //     })
    //     .end(done);
    // });
    // it.skip("should return 401 if bad username", done => {
    //   let body = {
    //     username: "badusername@bad.com",
    //     password: user.password
    //   };
    //   request(app)
    //     .post("/auth/signin")
    //     .send(body)
    //     .expect(res => {
    //       assert(res.status === 401);
    //     })
    //     .end(done);
    // });
    it("should return 200 if good credentials", done => {
      let body = {
        username: user.username,
        password: user.password
      };
      request(app)
        .post("/auth/signin")
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.token);
          token = res.body.token;
        })
        .end(done);
    });
  });
});
