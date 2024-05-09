var bodyParser = require("body-parser");
const routes = require("./routes/api");
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");
const socketIo = require("socket.io");
// const server = require("./server");

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://" + host, port);
});

const io = socketIo(server);

require("dotenv").config();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//   console.log("table is sync");
// });

app.use("/api", routes);

app.get("/get", async (req, res) => {
  return res.status(200).json({ msg: "working success" });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle events (e.g., notifications)
  socket.on("sendNotification", (notification) => {
    console.log("Notification received:", notification);
    // Broadcast the notification to all connected clients
    io.emit("receiveNotification", notification);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.post("/sendNotification", (req, res) => {
  const { notification } = req.body;
  io.emit("receiveNotification", notification);
  res.status(200).send("Notification sent successfully");
});

module.exports = { app, io };
