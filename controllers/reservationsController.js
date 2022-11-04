const BaseController = require("./baseController");

class ReservationsController extends BaseController {
  constructor(model, userModel, propertyModel) {
    super(model);
    this.userModel = userModel;
    this.propertyModel = propertyModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  // Retrieve all reservations
  async getAll(req, res) {
    try {
      const [owner] = await this.userModel.findOrCreate({
        where: {
          email: req.query.ownerEmail,
        },
      });
      const reservations = await this.model.findAll({
        include: [
          { model: this.userModel, as: "customer", attributes: ["name"] },
          {
            model: this.propertyModel,
            as: "properties",
            attributes: ["home_name"],
          },
        ],
        where: {
          owner_id: owner.id,
        },
      });
      return res.json(reservations);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific reversation
  async getOne(req, res) {
    const { reservationId } = req.params;
    try {
      // const [owner] = await this.userModel.findOrCreate({
      //   where: {
      //     email: req.query.ownerEmail,
      //   },
      // });
      const output = await this.model.findAll({
        // where: {
        //   // owner_id: owner.id,
        //   owner_id: 2,
        // },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ReservationsController;
