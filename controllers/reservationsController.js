const BaseController = require("./baseController");

class ReservationsController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async getAll(req, res) {
    console.log(req.query);
    try {
      // const [owner] = await this.userModel.findOrCreate({
      //   where: {
      //     email: req.query.ownerEmail,
      //   },
      // });
      const output = await this.model.findAll({
        where: {
          // owner_id: owner.id,
          owner_id: 2,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ReservationsController;
