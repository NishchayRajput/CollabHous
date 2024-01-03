///////////////////////////////////////////////////////////////IMPORTS/////////////////////////////////////////////////////////////


const express = require("express");
const router = express.Router();
const {getBlogs, getCommune, getInteraction, getHero,getNotification,getUserinfo ,getIndiBlogs, getIndiCommune, getIndiInteraction,getIndiHero, getIndiNotification, getIndiUserinfo, getAdminInfo, getIndiAdminInfo} = require('./blogs/get');
const {patchBlogs,patchCommune,patchInteraction,patchHero,patchNotification,patchuserInfo ,patchAdminInfo} = require('./blogs/patch');
const {deleteBlogs,deleteCommune,deleteInteraction,deleteHero,deleteNotification,deleteUserinfo,deleteAdminInfo} = require('./blogs/delete');
const {postBlogs,postHero, postAdminInfo} = require('./blogs/post');
const login = require('./auth/login');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////GET/////////////////////////////////////////////////////////////////

router.get("/blogs/",getBlogs );
router.get("/blogs/indi/:id",getIndiBlogs );
router.get("/blogs/commune",getCommune );
router.get("/blogs/commune/indi/:id",getIndiCommune );
router.get("/blogs/interaction",getInteraction );
router.get("/blogs/interaction/indi/:id",getIndiInteraction );
router.get("/blogs/hero",getHero);
router.get("/blogs/hero/indi/:id",getIndiHero);
router.get("/blogs/notification",getNotification );
router.get("/blogs/notification/indi/:id",getIndiNotification );
router.get("/blogs/userinfo",getUserinfo );
router.get("/blogs/userinfo/indi/:id",getIndiUserinfo );
router.get("/", getAdminInfo);
router.get("/indi/:id", getIndiAdminInfo);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////POST//////////////////////////////////////////////////////////////

router.post("/login", login);
router.post("/blogs/",postBlogs );
router.post("/blogs/hero",postHero );
router.post("/", postAdminInfo);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////PATCH/////////////////////////////////////////////////////////////

router.patch("/blogs/edit/:id",patchBlogs );
router.patch("/blogs/commune/edit/:id",patchCommune );
router.patch("/blogs/interaction/edit/:id",patchInteraction );
router.patch("/blogs/hero/edit/:id",patchHero);
router.patch("/blogs/notification/edit/:id",patchNotification );
router.patch("/blogs/userinfo/edit/:id",patchuserInfo );
router.patch("/edit/:id", patchAdminInfo );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////DELETE////////////////////////////////////////////////////////////


router.delete("/blogs/delete/:id",deleteBlogs );
router.delete("/blogs/commune/delete/:id",deleteCommune );
router.delete("/blogs/interaction/delete/:id",deleteInteraction );
router.delete("/blogs/hero/delete/:id",deleteHero);
router.delete("/blogs/notification/delete/:id",deleteNotification );
router.delete("/blogs/userinfo/delete/:id",deleteUserinfo );
router.delete("/delete/:id", deleteAdminInfo);



module.exports = router ;