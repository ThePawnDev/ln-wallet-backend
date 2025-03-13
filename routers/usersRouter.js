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

// export our router so we can initiate it in index.js
module.exports = router;
   