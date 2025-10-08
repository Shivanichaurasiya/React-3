import React, { useState } from 'react';

const Conditional = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <h1>Welcome Admin you are logged in</h1>;
  } else {
    return (
      <>
        <h1>You are not logged please login</h1>
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      </>
    );
  }
};

export default Conditional;
