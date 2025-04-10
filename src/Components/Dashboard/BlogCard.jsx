import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const BlogCard = () => {
  const userId = localStorage.getItem("userId");
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
  });
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `https://server-pnqp.onrender.com/api/getuserdata/${userId}`
        );
        setBlogData(response.data.existingUser.createdBlogs);
      } catch (error) {
        console.log("Error fetching blog data:", error);
      }
    };
    fetchBlogData();
  }, [userId]);

  const handleReadMore = (post) => {
    setSelectedBlog(post);
    setBlogId(post._id);
  };

  const handleEdit = () => {
    setEditForm({
      title: selectedBlog.title,
      category: selectedBlog.category,
      content: selectedBlog.content,
      image: selectedBlog.blogImage,
    });
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://server-pnqp.onrender.com/api/deleteblog/${blogId}`);
      setSelectedBlog(null);
      setBlogData(blogData.filter((blog) => blog._id !== blogId));
      toast.success("Blog Deleted Successfully");
    } catch (error) {
      toast.error("Error in Deleting blog");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://server-pnqp.onrender.com/api/editblog/${blogId}`,
        editForm
      );
      setSelectedBlog({ ...selectedBlog, ...editForm });
      setIsEditing(false);

      const formData = new FormData();
      formData.append("file", editForm.image);
      await axios.post(`https://server-pnqp.onrender.com/api/uploadblog/${blogId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Blog Updated Successfully!");
    } catch (error) {
      toast.error("Error in updating blog");
    }
  };

  return (
    <>
      {selectedBlog ? (
        <div className="flex flex-col items-center p-4 bg-[#0b1120] text-white min-h-screen">
          <div className="relative bg-[#1a2332] w-full max-w-3xl rounded-lg shadow-lg overflow-hidden p-6">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  className="w-full p-2 mb-4 rounded bg-[#0b1120] text-white border"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  placeholder="Title"
                />
                <textarea
                  className="w-full h-32 p-2 mb-4 rounded bg-[#0b1120] text-white border"
                  value={editForm.content}
                  onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                  placeholder="Content"
                ></textarea>
                <label className="text-gray-300 block mb-2">Current Image:</label>
                <img
                  className="w-full h-full p-2 mb-4 rounded bg-[#0b1120] text-white border"
                  src={selectedBlog.blogImage}
                  alt={selectedBlog.title}
                />
                <input
                  type="file"
                  className="w-full p-2 mb-4 rounded bg-[#0b1120] text-white border"
                  onChange={(e) => setEditForm({ ...editForm, image: e.target.files[0] })}
                />
                <div className="flex justify-center gap-4">
                  <button onClick={handleSave} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded">Save</button>
                  <button onClick={() => setIsEditing(false)} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <img src={selectedBlog.blogImage} className="w-full h-72 object-cover rounded-lg mb-4" alt={selectedBlog.title} />
                <h3 className="text-2xl font-semibold mb-2 text-center">{selectedBlog.title}</h3>
                <p className="text-gray-400 text-lg mb-4 text-center">{selectedBlog.date} | {selectedBlog.category}</p>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedBlog.content}</p>
                <div className="flex justify-center gap-4 mt-6">
                  <button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded cursor-pointer flex items-center gap-1"><AiOutlineEdit /> Edit</button>
                  <button onClick={handleDelete} className="bg-red-600 hover:bg-red-500 px-4 cursor-pointer py-2 rounded flex items-center gap-1"><AiOutlineDelete /> Delete</button>
                </div>
              </>
            )}
          </div>
          
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-[#0b1120] text-white">
          {blogData.length > 0 ? (
            blogData.map((post) => (
              <div key={post._id} className="bg-[#1a2332] rounded-lg shadow-md overflow-hidden">
                <img src={post.blogImage} className="w-full h-48 object-cover" alt={post.title} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-md mb-2">{post.category}</p>
                  <p className="text-gray-300 text-md line-clamp-2">{post.content}</p>
                  <button onClick={() => handleReadMore(post)} className="text-blue-500 mt-2 cursor-pointer">Read more</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No blogs found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default BlogCard;
