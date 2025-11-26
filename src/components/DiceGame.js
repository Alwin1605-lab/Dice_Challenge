import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiceGame.css';

function DiceGame() {
  const [dice1, setDice1] = useState(6);
  const [dice2, setDice2] = useState(6);
  const [result, setResult] = useState('Roll the Dice!');
  const [isRolling, setIsRolling] = useState(false);
  const [stats, setStats] = useState({ wins: 0, losses: 0, draws: 0 });
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/login');
      return;
    }
    setCurrentUser(user);
    setStats({
      wins: user.wins || 0,
      losses: user.losses || 0,
      draws: user.draws || 0
    });
  }, [navigate]);

  const updateUserStats = (result) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
      users[userIndex][result]++;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
      setCurrentUser(users[userIndex]);
      setStats({
        wins: users[userIndex].wins,
        losses: users[userIndex].losses,
        draws: users[userIndex].draws
      });
    }
  };

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setResult('Rolling...');

    // Animate the rolling
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      rollCount++;

      if (rollCount >= 10) {
        clearInterval(rollInterval);
        
        // Final roll
        const finalDice1 = Math.floor(Math.random() * 6) + 1;
        const finalDice2 = Math.floor(Math.random() * 6) + 1;
        
        setDice1(finalDice1);
        setDice2(finalDice2);

        // Determine winner
        setTimeout(() => {
          if (finalDice1 > finalDice2) {
            setResult('🚩 Player 1 Wins!');
            updateUserStats('wins');
          } else if (finalDice2 > finalDice1) {
            setResult('Player 2 Wins! 🚩');
            updateUserStats('losses');
          } else {
            setResult('Draw! 🤝');
            updateUserStats('draws');
          }
          setIsRolling(false);
        }, 500);
      }
    }, 100);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-container">
      <nav className="game-nav">
        <div className="user-info">
          <span>Welcome, {currentUser.name}! 👋</span>
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/how-to-play')} className="nav-button">
            How to Play
          </button>
          <button onClick={handleLogout} className="nav-button logout">
            Logout
          </button>
        </div>
      </nav>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Wins:</span>
          <span className="stat-value win">{stats.wins}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Losses:</span>
          <span className="stat-value loss">{stats.losses}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Draws:</span>
          <span className="stat-value draw">{stats.draws}</span>
        </div>
      </div>

      <div className="game-content">
        <h1 className={isRolling ? 'rolling-text' : ''}>{result}</h1>

        <div className="dice-container">
          <div className="dice">
            <p>Player 1</p>
            <img
              className={`dice-image ${isRolling ? 'rolling' : ''}`}
              src={`/images/dice${dice1}.png`}
              alt={`Dice ${dice1}`}
            />
          </div>

          <div className="dice">
            <p>Player 2</p>
            <img
              className={`dice-image ${isRolling ? 'rolling' : ''}`}
              src={`/images/dice${dice2}.png`}
              alt={`Dice ${dice2}`}
            />
          </div>
        </div>

        <button
          className="roll-button"
          onClick={rollDice}
          disabled={isRolling}
        >
          {isRolling ? '🎲 Rolling...' : '🎲 Roll Dice'}
        </button>
      </div>

      <footer>
        www 🎲 Dice Challenge 🎲 com
      </footer>
    </div>
  );
}

export default DiceGame;
