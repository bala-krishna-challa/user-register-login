import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: '*'
}));

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.use("/auth", authRoutes);

app.get("/", (req, res) => res.send("HELLO FROM HOMEPAGE"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

// GET => http://localhost:5000/users => all users
// POST => http://localhost:5000/users/register => Registers user
// POST => http://localhost:5000/auth/login => Logs in user