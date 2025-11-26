# Application Flow Diagram

## 🗺️ User Journey Map

```
┌─────────────────────────────────────────────────────────────────┐
│                      START: Visit Website                        │
│                     http://localhost:3000                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ↓
                    ┌───────────────┐
                    │  Login Page   │
                    │   /login      │
                    └───┬───────┬───┘
                        │       │
          ┌─────────────┘       └─────────────┐
          │ Have Account                New User│
          ↓                                     ↓
    ┌─────────────┐                    ┌──────────────┐
    │    LOGIN    │                    │  Signup Page │
    │  Enter:     │                    │   /signup    │
    │  - Email    │                    └──────┬───────┘
    │  - Password │                           │
    └──────┬──────┘                           │
           │                                  │
           │         CREATE ACCOUNT           │
           │         Fill Form:               │
           │         ┌──────────────┐         │
           │         │ - Name       │         │
           │         │ - Email      │◄────────┘
           │         │ - Password   │
           │         │ - Confirm    │
           │         └──────┬───────┘
           │                │
           │                ↓
           │         Validate & Save
           │                │
           └────────┬───────┘
                    │
                    ↓ (First time users)
            ┌───────────────┐
            │ How to Play   │
            │ /how-to-play  │
            └───────┬───────┘
                    │
          ┌─────────┴─────────┐
          │  Read Instructions │
          │  - Rules           │
          │  - Scoring         │
          │  - Tips            │
          └─────────┬──────────┘
                    │
                    ↓
            "Start Playing" Button
                    │
                    ↓
         ┌──────────────────────┐
         │   GAME PAGE          │
         │   /game              │
         └──────┬───────────────┘
                │
                ↓
    ┌───────────────────────────┐
    │   GAME INTERFACE          │
    │                           │
    │  👤 Welcome, [Name]       │
    │  [How to Play] [Logout]   │
    │                           │
    │  📊 Statistics Bar        │
    │  Wins: 0 | Loss: 0 | Draw:0│
    │                           │
    │  🎲 Dice Display          │
    │  ┌─────┐    ┌─────┐      │
    │  │ 🎲  │    │ 🎲  │      │
    │  │  6  │    │  6  │      │
    │  └─────┘    └─────┘      │
    │ Player 1    Player 2      │
    │                           │
    │  [🎲 Roll Dice]          │
    │                           │
    └───────────┬───────────────┘
                │
                ↓
         Click "Roll Dice"
                │
                ↓
    ┌───────────────────────────┐
    │   ANIMATION SEQUENCE       │
    │                           │
    │  1. Button disabled       │
    │  2. Heading: "Rolling..." │
    │  3. Dice spin (360°)      │
    │  4. 10 frames @ 100ms     │
    │  5. Final values show     │
    │                           │
    └───────────┬───────────────┘
                │
                ↓
         Determine Winner
                │
        ┌───────┴────────┐
        │                │
    Die1 > Die2      Die1 < Die2      Die1 = Die2
        │                │                │
        ↓                ↓                ↓
    🚩 Player 1    Player 2 Wins! 🚩    Draw! 🤝
       Wins!              │                │
        │                │                │
        ↓                ↓                ↓
    Wins++          Losses++          Draws++
        │                │                │
        └────────────┬───┴────────────────┘
                     │
                     ↓
            Update Statistics
                     │
                     ↓
            Save to localStorage
                     │
            ┌────────┴────────┐
            │                 │
            ↓                 ↓
      Play Again?         Done Playing?
            │                 │
            └─────────┐       │
                      │       ↓
                      │   Click Logout
                      │       │
                      │       ↓
                      │   Clear Session
                      │       │
                      │       ↓
                      │   Back to Login
                      │       │
                      └───────┘
```

---

## 🔄 State Flow

```
┌──────────────────────────────────────────────────────┐
│              APPLICATION STATE                        │
├──────────────────────────────────────────────────────┤
│                                                       │
│  📦 localStorage                                      │
│  ├── users: Array<User>                              │
│  │   └── { name, email, password, wins, losses,     │
│  │        draws }                                    │
│  │                                                   │
│  └── currentUser: User | null                        │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  🎮 Game State (Component)                           │
│  ├── dice1: number (1-6)                             │
│  ├── dice2: number (1-6)                             │
│  ├── result: string                                  │
│  ├── isRolling: boolean                              │
│  ├── stats: { wins, losses, draws }                  │
│  └── currentUser: User                               │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  🔐 Auth State (Components)                          │
│  ├── Login:                                          │
│  │   ├── email: string                               │
│  │   ├── password: string                            │
│  │   └── error: string                               │
│  │                                                   │
│  └── Signup:                                         │
│      ├── name: string                                │
│      ├── email: string                               │
│      ├── password: string                            │
│      ├── confirmPassword: string                     │
│      └── error: string                               │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## 🛣️ Route Protection

```
┌─────────────────────────────────────────────┐
│           ROUTE STRUCTURE                    │
├─────────────────────────────────────────────┤
│                                              │
│  / (root)                                    │
│  └─→ Redirect to /login                     │
│                                              │
│  /login                                      │
│  └─→ Public: Login Component                │
│      ├─ Success → /game                     │
│      └─ Signup Link → /signup               │
│                                              │
│  /signup                                     │
│  └─→ Public: Signup Component               │
│      ├─ Success → /how-to-play              │
│      └─ Login Link → /login                 │
│                                              │
│  /how-to-play                                │
│  └─→ Public: HowToPlay Component            │
│      ├─ If logged in → /game button         │
│      └─ If not logged in → /signup button   │
│                                              │
│  /game                                       │
│  └─→ Protected: DiceGame Component          │
│      ├─ Check currentUser                   │
│      ├─ If null → redirect /login           │
│      └─ If exists → show game               │
│                                              │
└─────────────────────────────────────────────┘
```

---

## 🎯 Component Hierarchy

```
App
├── Router
    ├── Route: "/"
    │   └── Navigate → "/login"
    │
    ├── Route: "/login"
    │   └── Login Component
    │       ├── State: email, password, error
    │       ├── Validation
    │       └── localStorage check
    │
    ├── Route: "/signup"
    │   └── Signup Component
    │       ├── State: formData, error
    │       ├── Validation (multiple)
    │       └── localStorage save
    │
    ├── Route: "/how-to-play"
    │   └── HowToPlay Component
    │       ├── Instructions
    │       ├── Rules
    │       └── Navigation buttons
    │
    └── Route: "/game"
        └── DiceGame Component
            ├── State: dice1, dice2, result,
            │          isRolling, stats
            ├── useEffect: check auth
            ├── rollDice(): animation logic
            ├── updateUserStats(): save stats
            └── UI:
                ├── Navigation bar
                ├── Statistics bar
                ├── Dice display
                ├── Roll button
                └── Footer
```

---

## 📊 Data Flow

```
┌──────────────────────────────────────────────────┐
│            USER INTERACTION FLOW                  │
└──────────────────────────────────────────────────┘

1. USER SIGNUP
   User Input → Component State → Validation
                                     ↓
                              localStorage.users.push()
                                     ↓
                          localStorage.currentUser = user
                                     ↓
                              navigate('/how-to-play')

2. USER LOGIN
   User Input → Component State → Validation
                                     ↓
                            Find user in localStorage
                                     ↓
                          localStorage.currentUser = user
                                     ↓
                              navigate('/game')

3. DICE ROLL
   Button Click → setIsRolling(true)
                        ↓
                  Animation Loop (10 iterations)
                        ↓
                  Generate final dice values
                        ↓
                  Compare values
                        ↓
                  Determine result
                        ↓
                  Update component stats state
                        ↓
                  Update localStorage users array
                        ↓
                  Update localStorage currentUser
                        ↓
                  setIsRolling(false)

4. LOGOUT
   Button Click → localStorage.removeItem('currentUser')
                        ↓
                  navigate('/login')

5. STATISTICS PERSISTENCE
   Every game → Update user object
                        ↓
                  Save to localStorage.users
                        ↓
                  Update localStorage.currentUser
                        ↓
                  Re-render with new stats
```

---

## 🎨 UI Component Tree

```
DiceGame Component
│
├── <div className="game-container">
│   │
│   ├── <nav className="game-nav">
│   │   ├── <div className="user-info">
│   │   │   └── Welcome, {name}!
│   │   │
│   │   └── <div className="nav-buttons">
│   │       ├── <button> How to Play
│   │       └── <button> Logout
│   │
│   ├── <div className="stats-bar">
│   │   ├── <div className="stat-item">
│   │   │   ├── Wins: {wins}
│   │   │
│   │   ├── <div className="stat-item">
│   │   │   ├── Losses: {losses}
│   │   │
│   │   └── <div className="stat-item">
│   │       └── Draws: {draws}
│   │
│   ├── <div className="game-content">
│   │   ├── <h1> {result}
│   │   │
│   │   ├── <div className="dice-container">
│   │   │   ├── <div className="dice">
│   │   │   │   ├── <p> Player 1
│   │   │   │   └── <img> dice{dice1}.png
│   │   │   │
│   │   │   └── <div className="dice">
│   │   │       ├── <p> Player 2
│   │   │       └── <img> dice{dice2}.png
│   │   │
│   │   └── <button> Roll Dice
│   │
│   └── <footer>
│       └── www 🎲 Dice Challenge 🎲 com
```

---

## ⚡ Event Flow

```
[User Action] → [Event Handler] → [State Update] → [Re-render]

Examples:

1. Roll Dice
   Click Button → rollDice() → setIsRolling(true)
                            → setResult("Rolling...")
                            → Animation Loop
                            → Final values
                            → Compare
                            → updateUserStats()
                            → setStats()
                            → Re-render UI

2. Login
   Submit Form → handleSubmit() → Validate input
                                → Check localStorage
                                → setCurrentUser()
                                → navigate()

3. Update Stats
   Game End → updateUserStats() → Find user
                                → Increment counter
                                → Save to localStorage
                                → Update component state
                                → Re-render stats bar
```

---

## 🔍 LocalStorage Schema

```json
{
  "users": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "wins": 5,
      "losses": 3,
      "draws": 2
    },
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "password": "secret456",
      "wins": 8,
      "losses": 2,
      "draws": 4
    }
  ],
  "currentUser": {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "wins": 5,
    "losses": 3,
    "draws": 2
  }
}
```

---

**This diagram shows the complete flow of the application!** 🎉
