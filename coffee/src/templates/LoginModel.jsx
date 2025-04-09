import React, { useState } from 'react';
import "./styles.css";

function LoginModal() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Logging in with:', username, password);
    setUsername('');
    setPassword('');
    setShowModal(false);
  };

  return (
    <div className="login-modal-container">
      <button className="login-button" onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="login-submit-button">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;