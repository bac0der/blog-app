// CreateBlog.jsx

import React, { useState } from 'react';
import { db, auth } from '../firebase'; // Firebase import qiling
import { collection, addDoc } from 'firebase/firestore'; // Firestore metodlarini import qiling

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Blog yaratish
  const handleCreateBlog = async () => {
    if (!title || !content) {
      alert('Please fill in both title and content.');
      return;
    }

    try {
      const blogCollection = collection(db, 'blogs');
      await addDoc(blogCollection, {
        title: title,
        content: content,
        author: auth.currentUser?.email, // Blogni kim qo‘shganini saqlash
        authorId: auth.currentUser?.uid, // Foydalanuvchining uid'sini saqlash
        createdAt: new Date(),
      });

      setTitle('');
      setContent('');
      alert('Blog created successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreateBlog}>Create Blog</button>
    </div>
  );
};

export default CreateBlog;
