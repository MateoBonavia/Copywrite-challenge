const { Router } = require("express");
const { reverseWord } = require("./functions");

const router = Router();

router.get("/iecho", async (req, res) => {
  let { text } = req.query;
  try {
    let textReversed = await reverseWord(text);
    res.status(200).send(textReversed);
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
