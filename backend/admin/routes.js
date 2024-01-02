///////////////////////////////////////////////////////////////IMPORTS/////////////////////////////////////////////////////////////


const express = require("express");
const router = express.Router();
const {getBlogs, getCommune, getInteraction, getHero,getNotification,getUserinfo ,getIndiBlogs, getIndiCommune, getIndiInteraction,getIndiHero, getIndiNotification, getIndiUserinfo, getAdminInfo, getIndiAdminInfo} = require('./blogs/get');
const {patchBlogs,patchCommune,patchInteraction,patchHero,patchNotification,patchuserInfo ,patchAdminInfo} = require('./blogs/patch');
const {deleteBlogs,deleteCommune,deleteInteraction,deleteHero,deleteNotification,deleteUserinfo,deleteAdminInfo} = require('./blogs/delete');
const {postBlogs,postHero} = require('./blogs/post');
const login = require('./auth/login');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////GET/////////////////////////////////////////////////////////////////

router.get("/", getAdminInfo);
router.get("/:id", getIndiAdminInfo);
router.get("/blogs/",getBlogs );
router.get("/blogs/:id",getIndiBlogs );
router.get("/blogs/commune",getCommune );
router.get("/blogs/commune/:id",getIndiCommune );
router.get("/blogs/interaction",getInteraction );
router.get("/blogs/interaction/:id",getIndiInteraction );
router.get("/blogs/hero",getHero);
router.get("/blogs/hero/:id",getIndiHero);
router.get("/blogs/notification",getNotification );
router.get("/blogs/notification/:id",getIndiNotification );
router.get("/blogs/userinfo",getUserinfo );
router.get("/blogs/userinfo/:id",getIndiUserinfo );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////POST//////////////////////////////////////////////////////////////


router.post("/login", login);
router.post("/blogs/",postBlogs );
router.post("/blogs/hero",postHero );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////PATCH/////////////////////////////////////////////////////////////


router.patch("/blogs/:id",patchBlogs );
router.patch("/blogs/commune/:id",patchCommune );
router.patch("/blogs/interaction/:id",patchInteraction );
router.patch("/blogs/hero/:id",patchHero);
router.patch("/blogs/notification/:id",patchNotification );
router.patch("/blogs/userinfo/:id",patchuserInfo );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////DELETE////////////////////////////////////////////////////////////


router.delete("/blogs/:id",deleteBlogs );
router.delete("/blogs/commune/:id",deleteCommune );
router.delete("/blogs/interaction/:id",deleteInteraction );
router.delete("/blogs/hero/:id",deleteHero);
router.delete("/blogs/notification/:id",deleteNotification );
router.delete("/blogs/userinfo/:id",deleteUserinfo );
router.delete("/:id");



module.exports = router ;