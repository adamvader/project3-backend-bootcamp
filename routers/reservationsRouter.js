const express = require("express");
const router = express.Router();

class ReservationsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.auth, this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    // router.get("/:reservationId", this.controller.getOne.bind(this.controller));
    // router.get(
    //   "/:reservationId/comments",
    //   this.controller.getComments.bind(this.controller)
    // );
    // router.post(
    //   "/:sightingId/comments",
    //   this.controller.insertOneComment.bind(this.controller)
    // );
    return router;
  }
}

module.exports = ReservationsRouter;
