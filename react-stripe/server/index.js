const express = require("express");
require("dotenv").config({ path: "./env" });

const cors = require("cors");

const createCheckoutSession = require("./api/checkout");
const webhook = require("./api/webhook");
const paymentIntent = require("./api/payment-intent");

const app = express();
const port = 8080;

app.use(express.json({
  verify: (req, res, buffer) => req["rawBody"] = buffer
}));
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-payment-intent", paymentIntent);
app.post("/create-checkout-session", createCheckoutSession);
app.post("/webhook", webhook);

app.listen(port, () => console.log("Server listening on port", port));