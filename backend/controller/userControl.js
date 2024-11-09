const usersCollecation = require("../Module/user");
const userProduct = require("../Module/admin");

exports.homePageControl = (req, res) => {
  res.send("Hello Worldd");
};

exports.signupDataControl = async (req, res) => {
  const { user, email, password, conPassword } = req.body;

  const userData = new usersCollecation({
    user: user,
    email: email,
    password: password,
    conpassword: conPassword
  });

  await userData.save(userData);
  res.json({ message: "Successfully insert data..." });
};

exports.loginControl = async (req, res) => {
  const { email, password } = req.body;

  const checkLogin = await usersCollecation.findOne({ email: email });
  console.log(checkLogin);

  if (checkLogin !== null) {
    if (
      checkLogin.userstatus === "Suspend" &&
      checkLogin.password == password
    ) {
      res.json({ message: "Contect Admin ..." });
    } else if (checkLogin.password == password && checkLogin.email == email) {
      res.json({ checkLogin, message: "Successfully login..." });
    } else {
      res.json({ message: "Email and Password did no match..." });
    }
  } else {
    res.json({ message: "Email and Password did no match..." });
  }
};

exports.userProductControl = async (req, res) => {
  const userPro = await userProduct.find({ status: "In-Stock" });
  res.json(userPro);
};
