import express from "express";
import { v4 as uuidv4 } from "uuid";
import { users } from "../user.js";

const router = express.Router();

router.post("/register", (req, res) => {
  if (req.headers["authorization"] !== "Bearer abc") {
    return res.json({
      status: 401,
      body: { message: "Invalid token" },
    });
  }

  const { emailId, name, password } = req.body;

  users.push({
    emailId,
    name,
    password,
    id: uuidv4(),
    isActive: true,
    picture: {
      large: "https://randomuser.me/api/portraits/men/82.jpg",
    },
    phone: "0475-4996568",
    cell: "0173-5202019",
  });
  console.log("USERS", users);
  res.json({
    status: 200,
    body: { message: `${name} has been added to the Database` },
  });
});

router.get("/", (req, res) => {
  if (req.headers["authorization"] !== "Bearer abc") {
    return res.json({
      status: 401,
      body: { message: "Invalid token" },
    });
  }
  res.json({
    status: 200,
    body: { users },
  });
});

export default router;
