const BaseController = require("./baseController");

class ReservationsController extends BaseController {
  constructor(model) {
    super(model);
    // this.categoryModel = categoryModel;
    // this.commentModel = commentModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  
  // Retrieve specific sighting
  async getOne(req, res) {
    const { reservationId } = req.params;
    try {
      const reservation = await this.model.findByPk(reservationId);
      return res.json(reservation);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve all comments for specific sighting
  // async getComments(req, res) {
  //   const { sightingId } = req.params;
  //   try {
  //     const comments = await this.commentModel.findAll({
  //       where: {
  //         sightingId: sightingId,
  //       },
  //     });
  //     return res.json(comments);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  // Create comment for specific sighting
  // async insertOneComment(req, res) {
  //   const { sightingId } = req.params;
  //   const { content } = req.body;
  //   try {
  //     const newComment = await this.commentModel.create({
  //       content: content,
  //       sightingId: sightingId,
  //     });
  //     return res.json(newComment);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
}

module.exports = ReservationsController;
