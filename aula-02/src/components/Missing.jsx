import React from 'react';
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page not Found</h2>
      <p>Well, that's disappointing.</p>
      <Link to="/">
        <p>Go to homepage.</p>
      </Link>
    </main>
  );
}

export default Missing;