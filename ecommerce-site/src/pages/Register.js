import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';
import { toast } from 'react-toastify';

import ToastParticles from '../components/ToastParticles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Début enregistrement utilisateur...");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Compte Firebase créé ✅");
console.log('Données envoyées à Firestore :', {
  email,
  firstName,
  lastName,
  phone,
  address
});
      await setDoc(doc(db, 'users', user.uid), {
        email,
        firstName,
        lastName,
        phone,
        address
      });

      toast.success(() => (
  <>
    <ToastParticles full />
    <span>Bienvenue, {firstName} !</span>
  </>
));


      // Reset des champs
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setPhone('');
      setAddress('');

      navigate('/');
    } catch (error) {
      console.error("Erreur à l'enregistrement 🔴", error);
      toast.error("Une erreur est survenue lors de la création du compte.");
    }
  };

  return (
    <div className="auth-page">
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
