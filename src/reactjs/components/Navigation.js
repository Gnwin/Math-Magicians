import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [navContent] = useState({
    title: 'Math magicians',
    links: ['Home', 'Calculator', 'Quote']
  })

  return (
    <div>
      <div>{navContent.title}</div>
      <div>
        {navContent.links.map((link, index) => {(
          <Link to={`./${link.toLowerCase()}`} key={index}>{link}</Link>
        )})}
      </div>
    </div>
  )
}

export default Navigation