import React, { useState } from 'react';
import Header from './layout/Header';
import Login from './layout/Login';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleToggleLoginForm = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  };

  return (
    <>
      <Header onCloseLoginForm={handleToggleLoginForm} />
      {showLoginForm && <Login onCloseLoginForm={handleToggleLoginForm} />}
      <Main />
      <Footer />
    </>
  );
}

export default App;
