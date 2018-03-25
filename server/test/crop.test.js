"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");

describe("CROPS", () => {
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
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully added!");
        })
        .end(done);
    });
    it("Successfully update a crop", done => {
      const body = {
        image_url: "http://test_crop1"
      };
      request(app)
        .post(`/crops/test_crop1`)
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
        .get(`/crops/test_crop1`)
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
        .delete(`/crops/test_crop1`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully deleted!");
        })
        .end(done);
    });
  });
});
