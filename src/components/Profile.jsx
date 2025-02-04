/* import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ username: "", bio: "", profilePicture: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };

    fetchProfile();
  }, []);

  const updateProfile = async () => {
    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      username: profile.username,
      bio: profile.bio,
      profilePicture: profile.profilePicture,
    });

    alert("Profile updated!");
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <input
        type="text"
        value={profile.username}
        placeholder="Username"
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        type="text"
        value={profile.bio}
        placeholder="Bio"
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
      />
      <input
        type="text"
        value={profile.profilePicture}
        placeholder="Profile Picture URL"
        onChange={(e) => setProfile({ ...profile, profilePicture: e.target.value })}
      />
      <button onClick={updateProfile}>Save Changes</button>
      
    </div>
  );
};

export default Profile;
*/

// Profile.jsx

import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Firebase import qiling
import { collection, getDocs, query, where } from 'firebase/firestore'; // Firestore metodlarini import qiling

const Profile = () => {
  const [blogs, setBlogs] = useState([]);

  // Foydalanuvchining o‘z bloglarini olish
  useEffect(() => {
    const fetchUserBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const q = query(blogCollection, where('authorId', '==', auth.currentUser?.uid)); // Faqat foydalanuvchi o‘zining bloglarini ko‘rsatadi
      const blogSnapshot = await getDocs(q);
      const userBlogs = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(userBlogs);
    };

    if (auth.currentUser) {
      fetchUserBlogs();
    }
  }, []);

  return (
    <div>
      <h2>Your Blogs</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p>Author: {blog.author}</p> {/* Muallifni ko‘rsatish */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Profile;

