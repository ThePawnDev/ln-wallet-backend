const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = require("express").Router();

// GET all users
router.get("/", (req, res) => {
    res.status(200).json({ message: "Got all users" });
});

// GET user by their username
router.get("/user", (req, res) => {
    res.status(200).json({ message: "Got this user" });
});

// POST a user to register
router.post("/register", (req, res) => {
    const user = req.body;

    console.log(user);

    res.status(201).json({ message: "Register user" });
});

// POST a user to login
router.post("/login", (req, res) => {
    const user = req.body;
   
    console.log(user);
   
    res.status(200).json({ message: "Login" });
});
   
// PUT a user to update them by their id
router.put("/:id", (req, res) => {
    const id = req.params.id;
   
    const user = req.body;
   
    console.log(id, user);
   
    res.status(200).json({ message: "Updates user" });
});
   
// DELETE a user by their id
router.delete("/:id", (req, res) => {
    const id = req.params.id;
   
    console.log(id)
   
    res.status(200).json({ message: "Deleted user" });
});

// Function to generate a JSON Web Token (JWT) for a given user
function generateToken(user) {
    // Define the payload to be included in the token, containing user data
    const payload = {
        id: user.id,
        username: user.username,
        admin: user.admin,
    };
    // Get the JWT secret from an environment variable, or use a default value
    const secret = process.env.JWT_SECRET || "Satoshi Nakamoto";
   
    // Define the options for the JWT, including the token expiration time
    const options = {
        expiresIn: "1d",
    };
   
    // Generate and return the JWT using the payload, secret, and options
    return jwt.sign(payload, secret, options);
} 
   
// export our router so we can initiate it in index.js
module.exports = router;
   