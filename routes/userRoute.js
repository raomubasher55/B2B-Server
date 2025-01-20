const express  = require('express');
const   router = express();
const path = require('path');
const multer = require('multer');
const passport = require('passport');
const userController = require('../controllers/authController')
const {signupValidator, loginValidator , updateProfileValidator } = require('../helper/validator');
const isLogined = require('../middlewares/auth');

router.use(express.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(file.mimetype === 'image/jpeg' || 'image/png') {
            cb(null, path.join(__dirname,'../public/images/'))
        }
    },
    filename: function (req, file, cb) {
      const name = Date.now()+"-"+file.originalname;
      cb(null,name)
    }
  })
  const fileFilter = (req ,file ,cb)=>{
    if(file.mimetype === 'image/jpeg'  || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null ,false)
    }
  }

  const upload = multer({
    storage: storage,
    fileFilter:fileFilter
   });


  router.post('/register' , upload.single('image') ,signupValidator ,  userController.signupUser )
  router.post('/login' ,loginValidator ,userController.loginUser );
  router.get('/verify-email' , userController.verifyEmail );
  

    // google
    router.get("/google", userController.loadAuth );
    router.get(
      "/google-auth",
      passport.authenticate("google", { scope: ["email", "profile"] })
    );

 
  // Google OAuth callback route
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/success",
      failureRedirect: "/failure",
    })
  );
 


  //authenticatied routes
  router.get('/profile' ,isLogined , userController.userProfile);
  router.post('/updateprofile' , isLogined ,updateProfileValidator , upload.single('image') , userController.updateProfile );
  router.get('/logout' ,isLogined, userController.logout);
  
  //  level , score , package , payment Status
  router.get('/kpi-data', isLogined , userController.KPIData );
  router.put('/update-score' , isLogined , userController.updateUserScore);
  router.put('/update-level' , isLogined , userController.updateUserLevel);
  router.post('/payment' , isLogined ,userController.handlePaymentAndUpdate );


module.exports = router;