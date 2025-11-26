# 🎲 Dice Challenge - React Game

A fun and interactive dice rolling game built with React, featuring user authentication, statistics tracking, and smooth animations.

## ✨ Features

- **User Authentication**: Secure login and signup system with form validation
- **Statistics Tracking**: Track your wins, losses, and draws
- **Smooth Animations**: Engaging dice rolling animations
- **How to Play Guide**: Comprehensive instructions for new players
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Local Storage**: Persistent user data and game statistics

## 🎮 Game Features

- Roll two dice and compete against Player 2
- Real-time statistics update
- Beautiful gradient design
- Smooth dice rolling animations
- Win/Loss/Draw tracking
- User profile management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Dice_Challenge
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📖 How to Play

1. **Sign Up**: Create a new account with your name, email, and password
2. **Login**: Use your credentials to access the game
3. **Read Instructions**: Check out the "How to Play" page for game rules
4. **Roll Dice**: Click the "Roll Dice" button to play
5. **Track Stats**: Monitor your wins, losses, and draws in real-time

## 🎯 Game Rules

- Both players roll a dice simultaneously
- The player with the higher number wins
- If both dice show the same number, it's a draw
- Your statistics are automatically tracked and saved

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **CSS3**: Custom styling with animations
- **Local Storage API**: Data persistence
- **Google Fonts**: Lobster and Indie Flower fonts

## 📁 Project Structure

```
Dice_Challenge/
├── public/
│   ├── images/
│   │   ├── dice1.png
│   │   ├── dice2.png
│   │   ├── dice3.png
│   │   ├── dice4.png
│   │   ├── dice5.png
│   │   └── dice6.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── DiceGame.js
│   │   ├── HowToPlay.js
│   │   ├── Auth.css
│   │   ├── DiceGame.css
│   │   └── HowToPlay.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Color Palette

- Primary Background: `#393E46`
- Secondary Background: `#232931`
- Accent Color: `#4ECCA3`
- Text Color: `#EEEEEE`

## 📱 Responsive Design

The game is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security Note

This is a demo application using localStorage for data persistence. In a production environment, you should:
- Use proper backend authentication
- Hash passwords before storage
- Implement JWT tokens or similar
- Use HTTPS
- Add rate limiting

## 🚀 Available Scripts

- `npm start`: Run development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Enjoy the Game!

Have fun rolling the dice and may the odds be in your favor! 🎲✨