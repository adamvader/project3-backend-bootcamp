//I don't know what im going im just copy pasting

const BaseController = require("./baseController");

class PropertiesController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async insertOne(req, res) {
    const {
      home_name,
      image_url,
      home_type,
      total_occupancy,
      total_bedrooms,
      total_bathrooms,
      summary,
      address,
      has_tv,
      has_kitchen,
      has_aircon,
      has_internet,
      price,
      owner_id,
    } = req.body;
    try {
      // TODO: Get seller email from auth, query Users table for seller ID

      // Create new listing
      const newListing = await this.model.create({
        home_name: home_name,
        image_url: image_url,
        home_type: home_type,
        total_occupancy: total_occupancy,
        total_bedrooms: total_bedrooms,
        total_bathrooms: total_bathrooms,
        summary: summary,
        address: address,
        has_tv: has_tv,
        has_kitchen: has_kitchen,
        has_aircon: has_aircon,
        has_internet: has_internet,
        price: price,
        owner_id: owner_id, 
      });

      // Respond with new listing
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { propertyName } = req.params;
    try {
      const property = await this.model.findByPk(propertyName, {
        // include: this.categoryModel,
      });
      return res.json(property);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = PropertiesController;
