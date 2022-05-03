import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [navContent] = useState({
    title: 'Math magicians',
    links: ['Home', 'Calculator', 'Quote'],
  });

  return (
    <div className="nav">
      <div className="nav-title">{navContent.title}</div>
      <div className="nav-links">
        {navContent.links.map((link) => (
          <Link to={`./${link.toLowerCase()}`} key={link} className="nav-link">{link}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
