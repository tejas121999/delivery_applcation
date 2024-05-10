const server = require("../app");
const socketIo = require("socket.io");
const io = socketIo(server);

// Handle socket connections
// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Handle events (e.g., notifications)
//   socket.on("sendNotification", (notification) => {
//     console.log("Notification received:", notification);
//     // Broadcast the notification to all connected clients
//     io.emit("receiveNotification", notification);
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });
module.exports = { io };
