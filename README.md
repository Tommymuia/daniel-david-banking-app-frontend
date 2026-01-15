# Banking App Frontend

Modern banking application frontend built with React, Vite, and Tailwind CSS.

## Features

- User authentication (Login/Signup)
- Dashboard with account overview
- Account management
- Money transfers
- Transaction history
- User settings
- Responsive design with dark theme

## Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- React Router
- Axios
- Zustand (state management)

## Backend Integration

This frontend connects to the Banking App backend API running on `http://localhost:8080/api`

### API Endpoints Used:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/accounts` - Get all accounts
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions/transfer` - Transfer money
- `GET /api/users/profile` - Get user profile

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
VITE_API_URL=http://localhost:8080/api
```

3. Start the development server:
```bash
npm run dev
```

4. Make sure the backend is running on `http://localhost:8080`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── api/           # API configuration and services
├── components/    # Reusable components
├── context/       # React context providers
├── pages/         # Page components
├── router/        # Routing configuration
└── store/         # State management
```

## Color Palette

- Deep Navy: #0A192F (background)
- Cyber Blue: #64FFDA (accents/CTAs)
- White/Gray: Text and UI elements