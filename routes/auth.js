import express from "express";
import { users } from "../user.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { emailId, password } = req.body;

  if (!emailId || !password) {
    res
      .status(400)
      .json({ message: "User email and password cannot be empty!" });
  }

  const user = users.find((user) => user.emailId === emailId);

  if (!user) {
    res.json
    ({
      status: 401,
      body: { message: "Invalid user email or password!" }
    });
  }

  if (!(user.password === password)) {
    res.json
    ({
      status: 401,
      body: { message: "Invalid user email or password!" }
    })
  }

  return res.status(200).json({ token: "abc" });
});

export default router;
