const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, Collection } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CRUD server here.");
});

app.listen(port, () => {
  console.log("CRUD server can listen you!");
});

//dbsajeeb
//pass: rdjnOdDnsavBHu82

const uri =
  "mongodb+srv://dbsajeeb:rdjnOdDnsavBHu82@cluster0.wntnfbx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("foodExpress").collection("users");
    const user = { name: "Sajeeb", email: "sajeeb@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(`Inserted ID: ${result.insertedId}`);
  } finally {
  }
}

run().catch(console.dir);
