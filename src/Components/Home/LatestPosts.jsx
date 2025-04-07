import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comment, setComment] = useState("");
  const [blogComments, setBlogComments] = useState([]);

  // Fetch all blogs
  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getallblogs");
        setPosts(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };
    getBlogsData();
  }, []);

  // Fetch comments for a selected blog
  const fetchComments = async (blogId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getcomments/${blogId}`);
      setBlogComments(response.data.blogComments);
    } catch (error) {
      console.error("Error fetching comments:", error.message);
    }
  };

  // Handle "Read More" click
  const handleReadMore = async (post) => {
    setSelectedPost(post);
    await fetchComments(post._id);
  };

  // Handle comment submission
  const handleCommentSubmit = async (blogId) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        console.error("User not authenticated");
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/api/addcomments/${userId}/${blogId}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Comment posted:", response.data);
      setComment("");

      // Fetch updated comments
      await fetchComments(blogId);

      // Update comment count in main blog list
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === blogId
            ? { ...post, comment: [...post.comment, response.data.newComment] }
            : post
        )
      );
    } catch (error) {
      console.error("Error posting comment:", error.message);
    }
  };

  return (
    <div className="w-full p-4 bg-[#0b1120] text-white flex flex-col items-center">
      {selectedPost ? (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-gray-900 p-6 rounded-2xl shadow-lg relative max-h-[80vh] overflow-y-auto">
            <RxCross2
              onClick={() => setSelectedPost(null)}
              className="absolute top-1 right-3 text-white text-2xl cursor-pointer"
            />
            <img
              src={selectedPost.blogImage}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedPost.title}</h3>
            <p className="text-gray-400 mb-4">{selectedPost.content}</p>

            {/* Comments Section */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Comments</h4>
              <div className="mb-4 flex flex-col gap-2">
                {blogComments.length > 0 ? (
                  blogComments.map((cmt, index) => (
                    <div key={index} className="px-2 py-4 border rounded-lg border-gray-700 text-gray-300">
                      <p className="text-blue-400 font-semibold">{cmt.user?.name || "Anonymous"}</p>
                      <p>{cmt.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>

              {/* Comment Input Field */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="flex-1 px-2 py-3 rounded bg-gray-800 border border-gray-600 text-white"
                  placeholder="Write a comment..."
                />
                <button
                  onClick={() => handleCommentSubmit(selectedPost._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
          {posts.map((post) => (
            <motion.div
              key={post._id}
              className="bg-gray-900 w-full p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={post.blogImage}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-1">{post.content}</p>
              
              {/* Dynamic Comment Count */}
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <FaRegComment className="mr-2" />
                <span>{post.comment?.length || 0} Comments</span>
              </div>

              <button
                onClick={() => handleReadMore(post)}
                className="px-4 py-2 text-blue-500 rounded-xl text-sm transition cursor-pointer border border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestPosts;
