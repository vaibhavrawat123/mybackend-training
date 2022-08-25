const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
//const publisherController= require("../controllers/publisherController")
//const bookController= require("../controllers/bookController")
const userController= require("../controllers/userController")
//const userController= require("../controll/userController")
const commonMw= require("../middlewares/commonMiddlewares.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createAuthor", authorController.createAuthor  )
//router.post("/createPub", publisherController.createPub )
//router.post("/createBook", bookController.createBook  )
 

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get("/basicCode",commonMw.mid5,userController .basicCode)
module.exports = router;