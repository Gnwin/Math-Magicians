import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [navContent] = useState({
    title: 'Math magicians',
    links: ['Home', 'Calculator', 'Quote'],
  });

  return (
    <div className="nav" data-testid="nav-a">
      <div className="nav-title">{navContent.title}</div>
      <div className="nav-links" data-testid="nav-b">
        {navContent.links.map((link, index) => (
          <Link to={`/${link.toLowerCase()}`} key={link} className="nav-link" data-testid={`nav-${index+1}`}>{link}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
