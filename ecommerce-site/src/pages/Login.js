import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
 const { uid, email: userEmail, displayName } = userCredential.user;

    dispatch(setUser({
      uid,
      email: userEmail,
      displayName: displayName || '', // tu peux mettre '' si null
    }));
      
     

      toast.success(`Bienvenue, ${userCredential.user.email} !`);
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
