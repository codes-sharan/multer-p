const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  const { title, text } = req.body;

  if (!title || !text || !req.file) {
    return res
      .status(400)
      .json({ error: "All fields (title, text, image) are required" });
  }

  try {
    const newBlog = new Blog({
      title,
      text,
      image: `/uploads/${req.file.filename}`, // Relative path for use in Next.js
    });

    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
