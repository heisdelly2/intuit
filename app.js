const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

let sessions = {};

// Helper function to delay actions
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Serve index.html when the root URL is accessed

app.get("/view/scs-v1-b24f48470dd24b15ab02313b33d427f873a92010f31f4f8895233719dab235dc5fb523a743ee4fc5aef1c4cedf158711", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
