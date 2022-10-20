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
const { property, reservation, user } = db;

// initializing Controllers -> note the lowercase for the first word
const reservationsController = new ReservationsController(
  reservation,
  property,
  user
);
const propertiesController = new PropertiesController(property, user);

// initializing Routers
const reservationRouter = new ReservationsRouter(
  reservationsController
).routes();
const propertiesRouter = new PropertiesRouter(
  propertiesController,
  auth
).routes();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

// USING the routers
app.use("/reservations", reservationRouter);
app.use("/properties", propertiesRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
