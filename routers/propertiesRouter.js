const express = require("express");
const router = express.Router();

class PropertiesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get("/:propertyName", this.controller.getOne.bind(this.controller));
    // router.get(
    //   "/:propertyId/comments",
    //   this.controller.getComments.bind(this.controller)
    // );
    // router.post(
    //   "/:sightingId/comments",
    //   this.controller.insertOneComment.bind(this.controller)
    // );
    return router;
  }
}

module.exports = PropertiesRouter;
