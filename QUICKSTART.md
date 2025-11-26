# Quick Start Guide

## 🎉 Your React Dice Game is Ready!

The development server is running at: **http://localhost:3000**

## 📋 What's Included

### Pages:
1. **Login Page** (`/login`) - Existing users can log in
2. **Signup Page** (`/signup`) - New users can create an account
3. **How to Play** (`/how-to-play`) - Game instructions and rules
4. **Game Page** (`/game`) - Main dice rolling game with stats

### Features:
- ✅ User authentication (Login/Signup)
- ✅ Form validation
- ✅ Password confirmation
- ✅ Statistics tracking (Wins, Losses, Draws)
- ✅ Smooth dice rolling animations
- ✅ Responsive design for all devices
- ✅ Local storage for data persistence
- ✅ User profile with name display
- ✅ Logout functionality
- ✅ Protected routes

## 🎮 How to Use

### First Time Users:
1. Click "Sign Up" 
2. Enter your name, email, and password (min 6 characters)
3. You'll be redirected to "How to Play" page
4. Read the instructions
5. Click "Start Playing" to begin

### Returning Users:
1. Enter your email and password on Login page
2. Click "Login"
3. Start playing immediately!

## 🎯 Game Play:
1. Click the "🎲 Roll Dice" button
2. Watch the dice roll with animation
3. See who wins (Player 1 or Player 2)
4. Your stats update automatically
5. Roll again to play more!

## 🔧 Commands

- `npm start` - Start development server
- `npm build` - Create production build
- `npm test` - Run tests

## 📱 Test on Mobile

Access from your phone using:
**http://10.208.114.6:3000**

(Make sure your phone is on the same network)

## 🎨 Customization Ideas

Want to enhance the game? Try:
- Add sound effects for dice rolls
- Add multiplayer support
- Create leaderboards
- Add different game modes
- Add achievements and badges
- Customize dice colors
- Add player avatars

## 🐛 Troubleshooting

**Port already in use?**
- Kill the process on port 3000 or
- Set a different port: `PORT=3001 npm start`

**Images not showing?**
- Make sure images are in `public/images/`
- Check browser console for errors

**Can't login?**
- Clear localStorage and create a new account
- Open DevTools > Application > Local Storage > Clear All

## 💾 Data Storage

All user data is stored in browser's localStorage:
- `users` - Array of all registered users
- `currentUser` - Currently logged in user

## 🎊 Enjoy Your Game!

Have fun playing and feel free to customize it further!
