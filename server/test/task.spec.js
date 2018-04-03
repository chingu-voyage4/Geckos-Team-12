"use strict";
/* eslint-env mocha */

let { app } = require("../index");
let request = require("supertest");
let assert = require("assert");
let crop_id = "";
let task_id = "";
let token = "";
let crop = {
  name: "test_crop1",
  category: "Veggie",
  image_url: "",
  short_desc: "Best veggie ever",
  difficulty_level: "easy",
  best_season: "spring",
  climate: "temperate"
};
let user = {
  username: "simpleseed_api_tester@seed.com",
  password: "simpleseed_api_tester"
};
describe("TASKS", () => {
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
  after(done => {
    request(app)
      .delete(`/crops/test_crop1`)
      .set("Authorization", `${token}`)
      .expect(res => {
        assert(res.status === 200);
        assert(res.body.message === "Crop successfully deleted!");
      })
      .end(done);
  });
  //┌——————————————————————————————————————————————————┐
  //│ ↓ TASKS                                        ↓ │
  //└——————————————————————————————————————————————————┘
  describe("#POST TASKS", () => {
    it("create crop", done => {
      request(app)
        .post("/crops")
        .set("Authorization", `${token}`)
        .send(crop)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Crop successfully added!");
          crop_id = res.body.crop._id;
        })
        .end(done);
    });
    it("Successfully create a task", done => {
      const body = {
        name: "test_task1",
        score: 200,
        steps: [
          { title: "step 1", description: "do step 1", status: false },
          { title: "step 2", description: "do step 2", status: false }
        ],
        category: "Planting",
        short_desc: "planting easily test_crop1",
        difficulty_level: "easy",
        crop_id: crop_id
      };
      request(app)
        .post(`/tasks`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Task successfully added!");
          task_id = res.body.task._id;
        })
        .end(done);
    });
    it("Successfully create a task", done => {
      const body = {
        name: "test_task2",
        score: 100,
        steps: [
          { title: "step 1", description: "do step 1", status: false },
          { title: "step 2", description: "do step 2", status: false }
        ],
        category: "Planting",
        short_desc: "planting easily test_crop1",
        difficulty_level: "easy",
        crop_id: crop_id
      };
      request(app)
        .post(`/tasks`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Task successfully added!");
        })
        .end(done);
    });
    it("Successfully update a task", done => {
      const body = {
        score: 100
      };
      request(app)
        .post(`/tasks/${task_id}`)
        .set("Authorization", `${token}`)
        .send(body)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Task successfully updated!");
          assert(res.body.task.score === 100);
        })
        .end(done);
    });
  });
  describe("#GET TASKS", () => {
    it("Successfully fetch all tasks", done => {
      request(app)
        .get(`/tasks`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(Array.isArray(res.body));
        })
        .end(done);
    });
    it("Successfully fetch one task", done => {
      request(app)
        .get(`/tasks/${task_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
        })
        .end(done);
    });
    it("Successfully fetch all tasks with same crop_id", done => {
      request(app)
        .get(`/tasks/crop/${crop_id}`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
        })
        .end(done);
    });
  });

  describe("#DELETE TASKS", () => {
    it("Successfully deletes a task", done => {
      request(app)
        .delete(`/tasks/test_task1`)
        .set("Authorization", `${token}`)
        .expect(res => {
          assert(res.status === 200);
          assert(res.body.message === "Task successfully deleted!");
        })
        .end(done);
    });
  });
});
