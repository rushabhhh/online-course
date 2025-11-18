import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import courseRoutes from "./routes/courseRoutes";

const app = express();

// Enable CORS for your frontend (add port 8081)
app.use(cors({ 
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:8081"],
  credentials: true 
}));

app.use(express.json({ limit: "10mb" }));

mongoose
  .connect("mongodb://127.0.0.1:27017/online_course")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error", err));

app.use("/api/courses", courseRoutes);

app.get("/", (_req, res) => res.send("API running"));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));