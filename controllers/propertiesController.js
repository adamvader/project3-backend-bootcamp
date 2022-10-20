//I don't know what im going im just copy pasting

const BaseController = require("./baseController");

class PropertiesController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async insertOne(req, res) {
    const {
      homeType,
      totalOccupancy,
      totalBedrooms,
      totalBathrooms,
      summary,
      address,
      price,
    } = req.body;
    try {
      // TODO: Get seller email from auth, query Users table for seller ID

      // Create new listing
      const newListing = await this.model.create({
        homeType: homeType,
        totalOccupancy: totalOccupancy,
        totalBedrooms: totalBedrooms,
        totalBathrooms: totalBathrooms,
        summary: summary,
        address: address,
        price: price,
        userId: 1, // TODO: Replace with seller ID of authenticated seller
      });

      // Respond with new listing
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { propertyId } = req.params;
    try {
      const property = await this.model.findByPk(propertyId, {
        // include: this.categoryModel,
      });
      return res.json(property);
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

module.exports = PropertiesController;
