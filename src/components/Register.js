import React from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import  '../styles/register.css';

export default function Register() {
  const navigate = useNavigate();

  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });

      console.log('User stored in Firestore');
      navigate('/Info');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async function githubLogin() {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL
      });

      console.log('User stored in Firestore');
      navigate('/Home');
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    }
  }

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
