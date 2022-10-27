const cors = require("cors");
const express = require("express");
require("dotenv").config();

const auth = require("./auth");
// importing Routers
const ReservationsRouter = require("./routers/reservationsRouter");
const PropertiesRouter = require("./routers/propertiesRouter");

// importing Controllers
const ReservationsController = require("./controllers/reservationsController");
const PropertiesController = require("./controllers/propertiesController");

//import DB
const db = require("./db/models/index");
const { user, property, reservation } = db;

// initializing Controllers -> note the lowercase for the first word
const reservationsController = new ReservationsController(
  reservation,
  user,
  property
);
const propertiesController = new PropertiesController(property);

// initializing Routers
const reservationsRouter = new ReservationsRouter(
  reservationsController
).routes();
const propertiesRouter = new PropertiesRouter(propertiesController).routes();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

// USING the routers
app.use("/reservations", reservationsRouter);
app.use("/properties", propertiesRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
