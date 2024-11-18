import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import '../Styles/Communities.css';

const Communities = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const savePostsToLocalStorage = (updatedPosts) => {
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handlePost = () => {
    if (editingPostId) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPostId ? { ...post, content: newPost } : post
      );
      setPosts(updatedPosts);
      savePostsToLocalStorage(updatedPosts);
      setEditingPostId(null);
    } else {
      const updatedPosts = [{ id: posts.length + 1, content: newPost }, ...posts];
      setPosts(updatedPosts);
      savePostsToLocalStorage(updatedPosts);
    }
    setNewPost('');
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setNewPost(postToEdit.content);
    setEditingPostId(postId);
  };

  return (
    <div>
      <Menu />
      <h1>Comunidades</h1>
      <div className="community-posts">
        {posts.map((post) => (
          <div key={post.id} className="community-post">
            <p>{post.content}</p>
            <div className="post-actions">
              <i
                className="fa fa-edit"
                onClick={() => handleEdit(post.id)}
                title="Editar"
              ></i>
              <i
                className="fa fa-trash-alt"
                onClick={() => handleDelete(post.id)}
                title="Excluir"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <textarea
        placeholder="Compartilhe sua experiência..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        className="post-input"
      ></textarea>
      <button onClick={handlePost}>{editingPostId ? 'Atualizar' : 'Postar'}</button>
    </div>
  );
};

export default Communities;
