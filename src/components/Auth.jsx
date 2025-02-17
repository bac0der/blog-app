/* import { useState } from "react";
import { auth } from "../firebase"; // Firebase config faylini import qilish
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Ro'yxatdan o'tish
  const handleSignUp = async () => {
    setError(""); // Xatolikni tozalash
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User Created:", userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  // Tizimga kirish
  const handleSignIn = async () => {
    setError(""); // Xatolikni tozalash
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User Logged In:", userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  // Chiqish
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login yoki Ro‘yxatdan o‘tish</h2>
      {error && <p className="error">{error}</p>}
      {user ? (
        <div>
          <p>👤 {user.email} tizimga kirdi</p>
          <button onClick={handleSignOut}>Chiqish</button>
        </div>
      ) : (
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignIn}>Kirish</button>
          <button onClick={handleSignUp}>Ro‘yxatdan o‘tish</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yo‘naltirish uchun
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // 🔥 Yo‘naltirish uchun hook

  // Ro'yxatdan o'tish
  const handleSignUp = async () => {
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User Created:", userCredential.user);
      navigate("/blog"); // 🔥 Home sahifasiga yo‘naltirish
    } catch (err) {
      setError(err.message);
    }
  };

  // Tizimga kirish
  const handleSignIn = async () => {
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User Logged In:", userCredential.user);
      navigate("/"); // 🔥 Home sahifasiga yo‘naltirish
    } catch (err) {
      setError(err.message);
    }
  };

  // Chiqish
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/"); // 🔥 Chiqishdan keyin login sahifasiga qaytish
    } catch (err) {
      setError(err.message);
    }
  };
  const handleNavigateToAddBlog = async() => {
    navigate("/blog")
  }

  return (
    <div className="auth-container">
      <h2>Login yoki Ro‘yxatdan o‘tish</h2>
      {error && <p className="error">{error}</p>}
      {user ? (
        <div>
          <p>👤 {user.email} tizimga kirdi</p>
          <button onClick={handleNavigateToAddBlog}>Blog qoshish</button>
        </div>
      ) : (
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignIn}>Kirish</button>
          <button onClick={handleSignUp}>Ro‘yxatdan o‘tish</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
