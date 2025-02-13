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
    <div className='blog-list-container'>
      {blogs.map(blog => (
        <div className='blog-list-items' key={blog.id}>
          <h3 className='blog-list-title'>{blog.title}</h3>
          <p className='blog-list-context'>{blog.content}</p>
          <p className=''>Author: {blog.author}</p> {/* Muallifni ko‘rsatish */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
