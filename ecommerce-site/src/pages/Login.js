import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔍 Récupérer les données Firestore
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      const firstName = docSnap.exists() ? docSnap.data().firstName : '';

      // 📦 Stockage dans Redux
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        firstName: firstName || '',
      }));

      // ✅ Notification et nettoyage
      toast.success(`Bienvenue, ${firstName || user.email} !`);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      toast.error('Erreur de connexion. Vérifiez vos identifiants.');
    }
  };

  return (
    <div className="auth-page">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
