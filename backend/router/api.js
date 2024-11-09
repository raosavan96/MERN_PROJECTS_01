const router = require("express").Router();
const userControl = require("../controller/userControl");
const adminControl = require("../controller/adminControl");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 5 }
});

// Get Api //

router.get("/", userControl.homePageControl);
router.get("/adminproduct", adminControl.adminProControl);
router.get("/userproduct", userControl.userProductControl);
router.get("/updateproduct/:uid", adminControl.updateProductControl);
router.get("/querylist", adminControl.queryListControl);
router.get("/queryid/:rid", adminControl.queryIdControl);
router.get("/appusers", adminControl.aapUserControl);
router.get("/handleUserStatus/:uids", adminControl.userStatusControl);

// Get Api //

// Post Api //

router.post("/signupdata", userControl.signupDataControl);
router.post("/logindata", userControl.loginControl);
router.post(
  "/addproducts",
  upload.single("img"),
  adminControl.addProductControl
);

router.post("/updateditem/:nuid", adminControl.updatedItemControl);
router.post("/userQuerys", adminControl.userQueryControl);
router.post(
  "/replyedquery/:nid",
  upload.single("img"),
  adminControl.replyedQueryControl
);

// Post Api //

// Delete Api //

router.delete("/deleteproduct/:did", adminControl.deleteProductControl);
router.delete("/deletequery/:qid", adminControl.deleteQueryControl);
router.delete("/userdelete/:duid", adminControl.deleteUserControl);

// Delete Api //

module.exports = router;
