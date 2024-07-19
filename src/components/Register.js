import React from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/register.css';

export default function Register() {
  const navigate = useNavigate();

  async function handleLogin(provider) {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          additionalInfoCompleted: false
        });
      }

      if (userDoc.exists() && userDoc.data().additionalInfoCompleted) {
        navigate('/Home');
      } else {
        navigate('/Info');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  const googleLogin = () => handleLogin(new GoogleAuthProvider());
  const githubLogin = () => handleLogin(new GithubAuthProvider());

  return (
    <div className='register'>
      <div className="signup-page">
        <div className="side-background">
          <h1>Join the Revolution</h1>
          <h2>Verve: Transforming education</h2>
        </div>
        <div className="signup-card">
          <img loading="lazy" src="/images/vervelogo.png" alt="vervein" id="logo" />
          <h1>Sign Up</h1>
          <div onClick={googleLogin} className="auth-buttons">
            <button>
              <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
            </button>
          </div>
          <div onClick={githubLogin} className="github-buttons">
            <button>
              <FontAwesomeIcon icon={faGithub} /> Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
