const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerConfig");
const blogController = require("../controllers/blogController");

router.post("/", upload.single("image"), blogController.createBlog);

module.exports = router;
