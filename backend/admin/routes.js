///////////////////////////////////////////////////////////////IMPORTS/////////////////////////////////////////////////////////////


const express = require("express");
const router = express.Router();
const {getBlogs, getCommune, getInteraction, getHero,getNotification,getUserinfo ,getIndiBlogs, getIndiCommune, getIndiInteraction,getIndiHero, getIndiNotification, getIndiUserinfo} = require('./blogs/get');
const {putBlogs,putCommune,putInteraction,putHero,putNotification,putuserInfo} = require('./blogs/put');
const {deleteBlogs,deleteCommune,deleteInteraction,deleteHero,deleteNotification,deleteUserinfo} = require('./blogs/delete');
const {postBlogs,postHero} = require('./blogs/post');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////GET/////////////////////////////////////////////////////////////////


router.get("/blogs/",getBlogs );
router.get("/blogs/commune",getCommune );
router.get("/blogs/interaction",getInteraction );
router.get("/blogs/hero",getHero);
router.get("/blogs/notification",getNotification );
router.get("/blogs/userinfo",getUserinfo );
router.get("/blogs/:id",getIndiBlogs );
router.get("/blogs/commune/:id",getIndiCommune );
router.get("/blogs/interaction/:id",getIndiInteraction );
router.get("/blogs/hero/:id",getIndiHero);
router.get("/blogs/notification/:id",getIndiNotification );
router.get("/blogs/userinfo/:id",getIndiUserinfo );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////POST//////////////////////////////////////////////////////////////

router.post("/blogs/",postBlogs );
router.post("/blogs/hero",postHero );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////PATCH/////////////////////////////////////////////////////////////


router.patch("/blogs/:id",putBlogs );
router.patch("/blogs/commune/:id",putCommune );
router.patch("/blogs/interaction/:id",putInteraction );
router.patch("/blogs/hero/:id",putHero);
router.patch("/blogs/notification/:id",putNotification );
router.patch("/blogs/userinfo/:id",putuserInfo );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////DELETE////////////////////////////////////////////////////////////


router.delete("/blogs/:id",deleteBlogs );
router.delete("/blogs/commune/:id",deleteCommune );
router.delete("/blogs/interaction/:id",deleteInteraction );
router.delete("/blogs/hero/:id",deleteHero);
router.delete("/blogs/notification/:id",deleteNotification );
router.delete("/blogs/userinfo/:id",deleteUserinfo );



module.exports = router ;