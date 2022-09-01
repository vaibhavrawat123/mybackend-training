const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid1= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mid1.authentication,mid1.authorization, userController.getUserData)
router.post("/users/:userId/posts", mid1.authentication,mid1.authorization, userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

module.exports = router;