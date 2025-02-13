import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Foydalanuvchining shaxsiy bloglarini olish
  useEffect(() => {
    const fetchUserBlogs = async () => {
      if (!auth.currentUser) return;

      const blogCollection = collection(db, 'blogs');
      const q = query(blogCollection, where('authorId', '==', auth.currentUser.uid));
      const blogSnapshot = await getDocs(q);
      const userBlogs = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(userBlogs);
    };

    fetchUserBlogs();
  }, []);

  // Log out funksiyasi
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Log out qilgandan keyin login sahifasiga yo‘naltirish
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {auth.currentUser?.email}</p>

      <button onClick={handleLogout} className="logout-btn">Log Out</button>

      <h3>Your Blogs</h3>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not added any blogs yet.</p>
      )}
    </div>
  );
};

export default Profile;

