// Import the Express library
const express = require("express");
const dotenv = require("dotenv")
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const usersRouter = require("./routers/usersRouter");
const lightningRouter = require("./routers/lightningRouter");

dotenv.config()

// Create a new instance of the Express server
const server = express()

// Use helmet middleware for security
server.use(helmet());

// Use morgan middleware for logging using the 'common' logging format
server.use(morgan("common"));

// Use cors middleware to enable cross-origin requests
server.use(cors());


// Use the built-in JSON middleware to parse incoming JSON requests
server.use(express.json())

// Use rate limiting middleware to limit the number of requests from a single IP
server.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
   );
   

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
