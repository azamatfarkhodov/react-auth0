import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth0Context } from "../contexts/auth0-context";

export default function SiteHeader() {
  const { isAuthenticated, login, logout, user } = useContext(Auth0Context);

  return (
    <div className="site-header">
      {/* stuff on the left */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/trivia">Trivia</Link>
      </div>

      {/* stuff on the right */}
      <div>
        {!isAuthenticated && <button onClick={login}>Login</button>}
        {isAuthenticated && user && (
          <>
            <p>{user.name}</p>
            <p onClick={logout}>Logout</p>
          </>
        )}
      </div>
    </div>
  );
}
