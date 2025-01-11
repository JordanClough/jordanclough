import React from 'react';
import { Link } from 'react-router-dom';

function BentoBox({ title, content, children, link }) {
    if (link) {
      return (
        <Link to={link} className="bento-box">
          {title && <h2>{title}</h2>}
          <p>{content}</p>
          {children}
        </Link>
      );
    }
    return (
      <div className="bento-box">
        {title && <h2>{title}</h2>}
        <p>{content}</p>
        {children}
      </div>
    );
}

export default BentoBox;