import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category || !image) {
      toast.error("Please fill in all fields including an image!");
      return;
    }

    try {
      const blogResponse = await axios.post(
        `https://server-pnqp.onrender.com/api/createblog/${userId}`,
        { title, category, content },
        { headers: { "Content-Type": "application/json" } }
      );

      if (blogResponse.status !== 201) {
        throw new Error("Failed to create blog");
      }

      const blogId = blogResponse.data.blog._id;

      const formData = new FormData();
      formData.append("file", image);

      const imageResponse = await axios.post(
        `https://server-pnqp.onrender.com/api/uploadblog/${blogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (imageResponse.status !== 200) {
        throw new Error("Failed to upload image");
      }

      toast.success("Blog Created Successfully!");

      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error:", error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0b1120] text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Create a New Blog</h2>
      <motion.form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="flex flex-col gap-1">
          <label className="text-base sm:text-lg">Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="px-3 py-2 rounded-lg bg-[#1a2332] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base sm:text-lg">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here..."
            rows="4"
            className="p-2 rounded-lg bg-[#1a2332] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base sm:text-lg">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg bg-[#1a2332] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Web Development">Web Development</option>
            <option value="AI & Machine Learning">AI & Machine Learning</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base sm:text-lg">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="p-2 rounded-lg bg-[#1a2332] text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 px-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-md sm:text-md font-bold cursor-pointer"
        >
          Submit Blog
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default CreateBlog;
