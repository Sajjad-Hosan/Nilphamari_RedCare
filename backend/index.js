const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { version } = require("react");

const port = 3000 || process.env.PORT;
const uri = "";

app.use(express.json());
app.use(cookieParser());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    const userCollection = client.db('blood_donation').collection('users');

    // apis
    app.get("/register", async (req, res) => {
      const body = req.body;
    });
  } finally {
    // console.log('')
  }
};

run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`The Server is running now ${port}!`);
});
