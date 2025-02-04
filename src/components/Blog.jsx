import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import BlogList from "./BlogList"
import CreateBlog from "./CreateBlog"

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = async () => {
    if (!title || !content) return alert("Please fill all fields");

    await addDoc(collection(db, "posts"), {
      title,
      content,
      createdAt: new Date(),
    });

    setTitle("");
    setContent("");
    fetchPosts();
  };

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPosts(postsArray);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="blog">
      <h2>Add a Blog Post</h2>
      {
        /*
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={addPost}>Add Post</button>
        */
      }
      <CreateBlog />

      <h2>All Blog Posts</h2>
      {
      /* 
      
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      */}
      <BlogList />
    </div>
  );
};

export default Blog;
