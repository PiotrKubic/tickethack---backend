const fields = ["departure", "arrival", "date"];

const checkBody = (req, res, next) => {
  const body = req.body;

  for (const field of fields) {
    // console.log("coucou");

    if (!body[field] || body[field] === "") {
      return res.json({ result: false });
    }
  }

  //   console.log("coucou");

  next();
};

module.exports = { checkBody };
