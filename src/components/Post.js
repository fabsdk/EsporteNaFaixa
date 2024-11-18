import React from 'react';
import '../Styles/Style.css';

const Post = ({ title, description }) => (
  <div className="post">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Post;
