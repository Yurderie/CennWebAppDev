var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = req.body.name_field;
  const email = req.body.email_field;
  const message = req.body.message_field;
  res.render('index', { title: 'Home' },
  
  
  );
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/Products', function(req, res, next) {
  res.render('Products', { title: 'Products' });
});

router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact Information'});
});

// router.get('/Login', function(req, res, next) {
//   res.render('Login', { title: 'Login Page'});
// });
module.exports = router;

module.exports.displayLoginPage = (req,res,next)=>{
  //check if the user is already logged in
  if(!req.user)
  {
      res.render('auth/login',
      {
          title: "Login",
          messages:req.flash('loginMessage'),
          displayName:req.user?req.user.displayName:''
      })
  }
  else
  {
    return res.redirect('/');
  }
}
module.exports.processLoginPage = (req,res,next)=>{
  passport.authenticate ('local',
  (err,user,info)=>{
      //server err?
      if(err)
      {
          //console.log(err);
       return next(err);
       
      }
      // is there a user login error?
      if(!user)
      {
          req.flash('loginMessage','Authentication Error');
          return res.redirect('/login');
      }
      req.login(user, (err)=>{
          // server error?
          if(err)
          {
              return next(err);
          }
          return res.redirect('/bookList');
      });
      
  })(req,res,next);
}
module.exports.displayRegisterPage = (req,res,next)=>{
  // check if the user is not already logged in
  if(!req.user)
  {
      res.render('auth/register',
      {
          title:'Register',
          messages:req.flash('registerMessage'),
          displayName:req.user ? req.user.displayName: ''
      });
  }
  else
  {
  return res.redirect('/');
  }
}
module.exports.processRegisterPage = (req,res,next)=>{
  //instantiate a user object
  let newUser = new User({
      username: req.body.username,
      //password:req.body.password
      email:req.body.email,
      displayName:req.body.displayName
  });
  User.register(newUser,req.body.password,(err)=>{
      if(err)
      {
          console.log("Error:inserting New User");
          if(err.nme == "UserExistsError")
          {
              req.flash(
                  'registerMessage',
                  'Registration Error:User Already Exists!'
              );
              console.log('Error: UserAlready Exists!')
          }
          return res.render('auth/register',
          {
              title:'Register',
              messages:req.flash('registerMessage'),
              displayName:req.user?req.user.displayName:''
          });
      }
      else
      {
          // if no error exists, then registration is successful
          // redirect the user and authenticate them
          return passport.authenticate('local')(req,res,()=>{
              res.redirect('/bookList')
          });
      }
  });
}
module.exports.performLogout = (req,res,next)=>{
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  //res.redirect('/');
}