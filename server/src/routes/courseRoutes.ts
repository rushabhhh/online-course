import { Router } from "express";
import Course from "../models/Course";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { title, description, category, price, duration, thumbnail } = req.body;
    if (!title || !description || !category || price == null) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    const course = await Course.create({ title, description, category, price, duration, thumbnail });
    return res.status(201).json(course);
  } catch (e: any) {
    return res.status(500).json({ message: e.message || "Server error." });
  }
});

router.get("/", async (_req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error." });
  }
});

export default router;