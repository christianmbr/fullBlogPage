import express from "express";
import { findAllBlogs, findBlog } from '../controller/blogController.js'
const router = express.Router();

router.get("/find", findAllBlogs);
router.get("/find/:id", findBlog);

export default router;
