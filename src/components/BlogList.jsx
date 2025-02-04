// BlogList.jsx

import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase import qiling
import { collection, getDocs } from 'firebase/firestore'; // Firestore metodlarini import qiling

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // Bloglarni olish
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p> {/* Muallifni ko‘rsatish */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
