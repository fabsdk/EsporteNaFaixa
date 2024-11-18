import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import Menu from '../components/Menu';
import '../Styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      { id: 1, title: 'Jogo de Futebol Amistoso', description: 'Convite para um jogo de futebol no sábado, 23/11/2024, às 11h30 da manhã.' },
      { id: 2, title: 'Jogo de Basquete Amistoso', description: 'Convite para um jogo de basquete no domingo, 24/11/2024, às 16h30 da tarde.' },
    ]);
  }, []);

  return (
    <div className="home-container">
      <Menu />
      <div className="main-content">
        <h1>Bem-vindo ao Esporte na Faixa</h1>
        <div className="timeline">
          {posts.map((post) => (
            <Post key={post.id} title={post.title} description={post.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
