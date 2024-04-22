import express from "express";
import { v4 as uuidv4 } from "uuid";
import { users } from "../user.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const { emailId, name, password } = req.body;

  users.push({ emailId, name, password, id: uuidv4(), isActive: true });

  res.send(`${name} has been added to the Database`);
});

router.get("/", (req, res) => {
  res.send({ users });
});

export default router;
