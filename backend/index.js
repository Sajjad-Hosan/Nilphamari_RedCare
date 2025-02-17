const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = 3000 || process.env.PORT;
// const uri = "mongodb://localhost:27017";
const uri = `mongodb+srv://${process.env.MONGO_UU}:${process.env.MONGO_PP}@cluster0.aeratuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const today = new Date();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://api.imgbb.com/1/upload",
      "https://nilphamari-red-care.vercel.app",
    ],
    credentials: true,
  })
);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const cookieOptions = {
  httpOnly: true,
  secure: process.env.EXP_ENV === "production" ? true : false,
  sameSite: process.env.EXP_ENV === "production" ? "none" : "strict",
};
const run = async () => {
  try {
    console.log(process.env.MONGO_UU)
    // mongoDB collection names
    const userCollection = client.db("blood_donation").collection("users");
    const donorCollection = client.db("blood_donation").collection("donors");
    const messageCollection = client
      .db("blood_donation")
      .collection("messages");
    const storyCollection = client.db("blood_donation").collection("stories");

    // apis
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.SECRET_TOK, {
        expiresIn: "1d",
      });
      res
        .cookie("token", token, cookieOptions)
        .send({ message: "success", token });
    });
    app.get("/user-find", async (req, res) => {
      const user = await userCollection.findOne({ email: req.query?.email });
      if (!user) {
        return res.status(404).send({ message: "user not find!" });
      }
      res.send({ message: "successfull", user });
    });
    app.post("/login", async (req, res) => {
      const body = req.body;
      const user = await userCollection.findOne({ email: body.email });
      if (!user) {
        return res.status(404).send({ message: "user not find!" });
      }
      const result = await userCollection.updateOne(
        { email: body.email },
        {
          $set: {
            lastSignInTime: body.lastSignInTime,
          },
        }
      );
      return res.send({ message: true, user, updated: result });
    });
    app.post("/logout", async (req, res) => {
      const body = req.body;
      res
        .clearCookie("token", { ...cookieOptions, maxAge: 0 })
        .send({ message: "user logout!" });
    });
    app.post("/register", async (req, res) => {
      const countUsers = await userCollection.estimatedDocumentCount();
      const body = req.body;
      const exist = await userCollection.findOne({
        $or: [
          {
            email: body.email,
          },
          {
            name: body.name,
          },
        ],
      });
      if (exist) {
        return res.send({ message: "user already exist" });
      }
      const user = {
        ...body,
      };
      const result = await userCollection.insertOne(user);
      res.send({ message: "register complete!", result });
      console.log(body);
    });

    //

    app.patch("/new-donor", async (req, res) => {
      const body = req.body;
      const exist = await donorCollection.findOne({
        $or: [
          {
            email: body.email,
          },
          {
            userName: body.userName,
          },
        ],
      });
      if (exist) {
        return res.send({ message: "the username or  email already exist!" });
      }
      const result = await userCollection.updateOne(
        { email: body.email },
        { $set: body }
      );
      const updatedUser = await userCollection.findOne({ email: body.email });
      if (!updatedUser) {
        return;
      }
      const donorData = {
        _id: updatedUser._id,
        email: body.email,
      };
      const result2 = await donorCollection.insertOne(donorData);
      res.send({ message: "successful!", result, result2 });
    });

    app.post("/donors", async (req, res) => {
      const page = +req.query.cursor;
      const limit = +req.query.limit + 1;
      const count = await userCollection.estimatedDocumentCount();

      console.log("page", page);
      const donors = await userCollection
        .find()
        .skip(page * limit)
        .limit(limit)
        .toArray();

      res.send({
        message: "successful",
        donors,
        page: page,
        count,
      });
    });
    app.patch("/update", async (req, res) => {
      const query = req.query;
      // console.log(query.donor === "true" ? true : false );
      if (query?.donor) {
        const result = await userCollection.updateOne(
          { email: query.email },
          { $set: { isDonor: query.donor === "true" ? true : false } }
        );
        res.send({ message: "successful", result });
      }
    });

    // success story related api
    app.post("/story-add", async (req, res) => {
      const body = req.body;
      const exist = await storyCollection.findOne({ email: body.email });
      if (exist) {
        return res.send({ message: "the user story already exist!" });
      }
      const result = await storyCollection.insertOne(body);
      res.send({ message: "successful", result });
    });

    // Message related apis
    app.get("/message", async (req, res) => {
      const chatEmail = req.query?.chatEmail;
      const userEmail = req.query?.userEmail;

      const result = await messageCollection
        .find({
          $or: [
            { sender: chatEmail, receiver: userEmail },
            { sender: userEmail, receiver: chatEmail },
          ],
        })
        .toArray();
      res.send({ message: "successful", result });
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
