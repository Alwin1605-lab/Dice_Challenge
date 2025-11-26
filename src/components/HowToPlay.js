import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HowToPlay.css';

function HowToPlay() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="howtoplay-container">
      <div className="howtoplay-card">
        <h1>🎲 How to Play Dice Challenge</h1>
        
        <div className="instructions">
          <div className="instruction-section">
            <h2>🎯 Game Objective</h2>
            <p>
              Roll the dice and compete against Player 2! The player with the higher 
              dice value wins the round. Build your winning streak and track your stats!
            </p>
          </div>

          <div className="instruction-section">
            <h2>📜 Game Rules</h2>
            <ul>
              <li>Click the "Roll Dice" button to start a new round</li>
              <li>Both dice will roll simultaneously with a cool animation</li>
              <li>The player with the higher number wins the round</li>
              <li>If both dice show the same number, it's a draw</li>
              <li>Your wins, losses, and draws are tracked automatically</li>
            </ul>
          </div>

          <div className="instruction-section">
            <h2>🏆 Scoring System</h2>
            <div className="scoring-grid">
              <div className="score-item">
                <span className="score-icon win">✅</span>
                <span>Win: Player 1 dice &gt; Player 2 dice</span>
              </div>
              <div className="score-item">
                <span className="score-icon loss">❌</span>
                <span>Loss: Player 1 dice &lt; Player 2 dice</span>
              </div>
              <div className="score-item">
                <span className="score-icon draw">🤝</span>
                <span>Draw: Both dice show same number</span>
              </div>
            </div>
          </div>

          <div className="instruction-section">
            <h2>💡 Tips</h2>
            <ul>
              <li>Keep track of your statistics to see your progress</li>
              <li>Challenge yourself to improve your win rate</li>
              <li>The game uses fair random number generation</li>
              <li>Take breaks between rounds for best experience</li>
            </ul>
          </div>

          <div className="instruction-section">
            <h2>🎮 Game Features</h2>
            <ul>
              <li>Smooth dice rolling animations</li>
              <li>Real-time statistics tracking</li>
              <li>User authentication and profile</li>
              <li>Responsive design for all devices</li>
              <li>Beautiful visual effects and colors</li>
            </ul>
          </div>
        </div>

        <div className="button-group">
          {currentUser ? (
            <>
              <button onClick={() => navigate('/game')} className="primary-button">
                🎲 Start Playing
              </button>
              <button onClick={() => navigate('/login')} className="secondary-button">
                Back to Login
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/signup')} className="primary-button">
                Sign Up to Play
              </button>
              <button onClick={() => navigate('/login')} className="secondary-button">
                Back to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
