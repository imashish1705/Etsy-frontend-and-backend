const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");


// const generateJwtToken = (_id, role) => {
//   return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
// };



exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async(error, user) => {
      if (user) return res.status(400).json({
          error: "Admin already registered",
        });
  
      const { firstName, lastName, email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        firstName,
        lastName,
        email,
        //password,
        hash_password,
        username: shortid.generate(),
        role:"admin"
      });
  
      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (data) {
          //const token = generateJwtToken(user._id, user.role);
          //const { _id, firstName, lastName, email, role, fullName } = user;
          return res.status(201).json({
            //token,
            //user:  data //{ _id, firstName, lastName, email, role, fullName },
            message:"admin created successfully..."
          });
        }
      });
    });
  };


exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec( (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if(user.authenticate(req.body.password) && user.role === "admin") {
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"1d"});
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName }
        });
      } else {
        return res.json.status(400).json({
          message: "Invalid Password"
        })
      }
      
    }
       else {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    
  });
};

exports.requiredSignin =(req,res,next) =>{
  // const token = req.headers.authorization;
  // console.log(token);
  const token =  req.headers.authorization.split(' ')[1];
  const user = jwt.verify(token,process.env.JWT_SECRET);
  req.user = user;
  next();

  next();
}
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};