import React from "react";

const GoogleLogin = () => {
  const GOOGLE_CLIENT_ID =
    "30161074278-idj5eof64nb5hv3tfat6btggtb7lei4c.apps.googleusercontent.com";
  const REDIRECT_URI = "http://localhost:8000/user/googlelogin";

  const handleLogin = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile&prompt=consent`;
    window.location.href = authUrl;
  };

  return (
    <div style={{ height: 500, width: 500 }}>
      <h1>Google Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
