import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  console.log("test router works");
  res.send("jordy");
});

export default router;
