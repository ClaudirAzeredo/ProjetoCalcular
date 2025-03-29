import React from "react";

const Post = ({ titulo, autor, data, hora, conteudo, hashtags }) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{titulo}</h2>
      
      <div className="post-meta">
        <span>{autor}</span>
        <span>{data}</span>
        <span>{hora}</span>
      </div>
      
      <p className="post-content">{conteudo}</p>

      {hashtags && <p className="post-hashtags">{hashtags}</p>}
    </div>
  );
};

export default Post;
