"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");
let crop_id = "";
let user = {
  username: "simpleseed_api_tester@seed.com",
  password: "simpleseed_api_tester"
};
let token = "";
describe("CROPS", () => {
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
  //│ ↓ CROPS                                        ↓ │
  //└——————————————————————————————————————————————————┘
  describe("#POST CROPS", () => {
    it("Successfully create a crop", done => {
      const body = {
        name: "test_crop1",
        category: "Veggie",
        image_url: "",
        short_desc: "Best veggie ever",
        difficulty_level: "easy",
        best_season: "spring",
        climate: "temperate"
      };
      request(app)
        .post(`/crops`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully added!");
          crop_id = res.body.crop._id;
        })
        .end(done);
    });
    it("Successfully update a crop", done => {
      const body = {
        image_url: "http://test_crop1"
      };
      request(app)
        .post(`/crops/${crop_id}`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          console.log(res.body);
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully updated!");
          assert(res.body.crop.image_url === "http://test_crop1");
        })
        .end(done);
    });
  });
  describe("#GET CROPS", () => {
    it("Successfully fetch all crops", done => {
      request(app)
        .get(`/crops`)
        .expect(res => {
          assert(res.status === 200);
          assert(Array.isArray(res.body));
        })
        .end(done);
    });
    it("Successfully fetch one crop", done => {
      request(app)
        .get(`/crops/${crop_id}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.name === "test_crop1");
        })
        .end(done);
    });
  });

  describe("#DELETE CROPS", () => {
    it("Successfully deletes a crop", done => {
      request(app)
        .delete(`/crops/${crop_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully deleted!");
        })
        .end(done);
    });
  });
});
