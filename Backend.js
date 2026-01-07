const fs = require("fs").promises;
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

// Loading recipes.json into MongoDB
let recipeSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  recipeYield: { type: String, default: "" },
  cookTime: { type: String, default: "" },
  prepTime: { type: String, default: "" },
  ingredients: { type: [String], default: "" },
});
let Recipe = mongoose.model("Recipe", recipeSchema);

const port = 3000;

const app = express();

app.use(express.static("build"));
app.use(express.json());



app.get("/search", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const recipes = await Recipe.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { ingredients: { $regex: keyword, $options: "i" } },
      ],
    });
    res.json(recipes);
  } catch (error) {
    console.error("Error searching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/form", (req, res) => {
  res.send(diet);
});

let diet = "this is a test";
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/populateDB", (req, res) => {
  mongoose
    .connect("mongodb://localhost:27017/RecipesDB")
    .then(() => {
      console.log("Connected to MongoDB");
      mongoose.connection.db.dropDatabase();
    })
    .then(() => {
      let db = mongoose.connection;
      db.on("open", function (err) {
        if (err) throw err;
      });
    })
    .then(() => fs.readFile(path.join("src", "recipes.json")))
    .then((response) => JSON.parse(response))
    .then((json) => {
      const promises = json.map((recipe) => {
        return Recipe.create(recipe).then((result) => {
          console.log("Added recipe:", result.name);
        });
      });
      return Promise.all(promises);
    })
    .then((data) => {
      console.log("Done populating database!");
      res.send({ success: true, amount: data.length });
    });
});

app.listen(port, () => {
  console.log("Server is running on port", port);

  console.log(`\nGo to localhost:${port} to view site`);
});
