// Import the Express library
const express = require("express");
// Imports for our new routers
const usersRouter = require("./routers/usersRouter");
const lightningRouter = require("./routers/lightningRouter");


// Create a new instance of the Express server
const server = express()
// Use the built-in JSON middleware to parse incoming JSON requests
server.use(express.json())

// Set up a route to handle GET requests to the root path
server.get("/", (req, res) => {
    // Send a JSON response with a "message" property set to "I'm alive!"
    res.status(200).json({ message: "I'm alive!" });
});

// Add our routers before server.listen()
server.use("/users", usersRouter);
server.use("/lightning", lightningRouter);

// Set the server to listen on the provided port, or 5500 if no port is specified
const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    // Log a message to the console when the server starts listening
    console.log(`Server listening on port ${PORT}`);
});
