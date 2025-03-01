const express = require("express");
const router = express.Router();
const { like, comment, reply } = require("./controllers/interaction");
const blogs = require("./controllers/iblogs");
const blog_card = require("./controllers/blogs");
const blog_hero = require("./controllers/blog_hero");
const auth = require("./middleware/auth");
const headers = require("./controllers/headers");
const profile = require("./controllers/profile");
const logout = require("./controllers/logout");
const {
  settings,
  questions,
  get_settings,
  set_interest,
  get_interest,
} = require("./controllers/commune");
const update_notification = require('./controllers/notification');

router.use(
  [
    "/like*",
    "/comment*",
    "/reply*",
    "/headers*",
    "/profile*",
    "/settings*",
    "/questions*",
    "/get_settings*",
    "/set_interest*",
    "/get_interest*",
    "/notification/status*"
  ],
  auth
);
router.post("/like", like);
router.post("/set_interest", set_interest);
router.get("/logout", logout);
router.get("/headers", headers);
router.get("/profile", profile);
router.post("/comment", comment);
router.get("/", blog_card);
router.post("/hero", blog_hero);
router.post("/reply", reply);
router.post("/settings", settings);
router.post("/questions", questions);
router.get("/notification/status", update_notification );
router.get("/get_settings", get_settings);
router.get("/get_interest", get_interest);
router.get("/:id", blogs);


module.exports = router;
