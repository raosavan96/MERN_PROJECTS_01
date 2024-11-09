const nodemailer = require("nodemailer");
const usersCollecation = require("../Module/user");
const productCollection = require("../Module/admin");
const userQueryCollecation = require("../Module/query");

exports.addProductControl = async (req, res) => {
  const { title, description, price } = req.body;
  const imgPro = req.file.filename;

  const productRecord = new productCollection({
    title: title,
    description: description,
    price: price,
    proImg: imgPro
  });

  productRecord.save(productRecord);
  res.json({ message: "Successfully added Product..." });
};

exports.adminProControl = async (req, res) => {
  const adminPro = await productCollection.find();
  res.json(adminPro);
};

exports.deleteProductControl = async (req, res) => {
  const { did } = req.params;
  await productCollection.findByIdAndDelete(did);
  res.json({ message: "Successfully Deleted..." });
};

exports.updateProductControl = async (req, res) => {
  const { uid } = req.params;
  const updateProd = await productCollection.findById(uid);
  res.json(updateProd);
};

exports.updatedItemControl = async (req, res) => {
  const { title, description, price, status } = req.body;
  const { nuid } = req.params;

  await productCollection.findByIdAndUpdate(nuid, {
    title: title,
    description: description,
    price: price,
    status: status
  });

  res.json({ message: "Successfully update product..." });
};

exports.userQueryControl = async (req, res) => {
  const { email, message } = req.body;
  const userQuery = new userQueryCollecation({
    email: email,
    message: message
  });

  await userQuery.save(userQuery);
};

exports.queryListControl = async (req, res) => {
  const queryList = await userQueryCollecation.find();
  res.json(queryList);
};

exports.queryIdControl = async (req, res) => {
  const { rid } = req.params;
  const queryId = await userQueryCollecation.findById(rid);
  res.json(queryId);
};

exports.replyedQueryControl = async (req, res) => {
  const { sub, reply, to } = req.body;
  const { nid } = req.params;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "savanyadav377@gmail.com",
      pass: "ihpglinddjgewtyn"
    }
  });
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "savanyadav377@gmail.com", // sender address
      to: to, // list of receivers
      subject: sub, // Subject line
      text: reply, // plain text body
      html: reply // html body
    });
  }
  main().catch(console.error);

  await userQueryCollecation.findByIdAndUpdate(nid, {
    status: "read"
  });

  res.json({ message: "Successfully replyed.." });
};

exports.deleteQueryControl = async (req, res) => {
  const { qid } = req.params;
  await userQueryCollecation.findByIdAndDelete(qid);
  res.json({ message: "Successfully deleted query..." });
};

exports.aapUserControl = async (req, res) => {
  const users = await usersCollecation.find();
  res.json(users);
};

exports.userStatusControl = async (req, res) => {
  const { uids } = req.params;

  const userStatusid = await usersCollecation.findById(uids);
  let userS = userStatusid.userstatus;

  if (userS == "Active") {
    userS = "Suspend";
  } else {
    userS = "Active";
  }

  await usersCollecation.findByIdAndUpdate(uids, {
    userstatus: userS
  });
  res.json({ userS, message: "Successfully user status updated..." });
};

exports.deleteUserControl = async (req, res) => {
  const { duid } = req.params;
  await usersCollecation.findByIdAndDelete(duid);
  res.json({ message: "Successfully deleted user..." });
};
