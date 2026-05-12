import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/gifts');
  };

  return (
    <div className="main-page">
      <section className="landing-hero">
        <h1>GiftLink</h1>

        <p className="landing-tagline">
          Share gifts. Find gifts. Help your community.
        </p>

        <p className="landing-description">
          GiftLink is a community gift-sharing platform where users can list
          items they no longer need and help others find useful gifts.
        </p>

        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </section>
    </div>
  );
}

export default MainPage;