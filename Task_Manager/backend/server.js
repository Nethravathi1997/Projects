require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
