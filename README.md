# Mobile Movie App

A React Native mobile application for browsing and discovering movies with a modern, user-friendly interface.

## Screenshots

### Home Screen
![Home Screen](assets/images/homescreen.png)

### Search Screen
![Search Screen](assets/images/search.png)

### Movie Details Page
![Movie Details Page](assets/images/moviepage.png)

## Features

- Browse trending and popular movies
- Search for movies by title
- View detailed movie information
- Save favorite movies
- Modern and responsive UI design

## Tech Stack

- React Native
- TypeScript
- Expo
- NativeWind (Tailwind CSS for React Native)
- Appwrite (Backend services)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository

git clone <repository-url>
cd mobile_movie_app


2. Install dependencies

npm install


3. Start the development server

npx expo start


5. **Run on device/simulator**
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Physical Device**: Scan QR code with Expo Go app

### Additional Commands
- **Type checking**: `npx tsc --noEmit`
- **Linting**: `npx eslint .`
- **Build for production**: `npx expo build`

## Usability Heuristics Focused On

### 1. Visibility of System Status
- **Loading States**: Clear loading indicators during data fetching
- **Search Feedback**: Real-time search results and empty state handling
- **Navigation Indicators**: Active tab highlighting in bottom navigation

### 2. Match Between System and Real World
- **Familiar Icons**: Intuitive icons for search, profile, and saved items
- **Movie Metaphors**: Card-based layout mimicking physical movie posters
- **Natural Language**: Clear, conversational error messages and labels

### 3. User Control and Freedom
- **Easy Navigation**: Bottom tab navigation for quick access to main sections
- **Search Control**: Ability to clear search and start over
- **Save/Unsave**: Easy toggle for adding/removing movies from saved list

### 4. Consistency and Standards
- **Design System**: Consistent spacing, typography, and color scheme throughout
- **Interaction Patterns**: Uniform touch targets and gesture responses
- **Component Reusability**: Standardized MovieCard and TrendingCard components

### 5. Error Prevention
- **Input Validation**: Search input handling to prevent empty or invalid queries
- **Network Error Handling**: Graceful degradation when API calls fail
- **Type Safety**: TypeScript implementation to prevent runtime errors

### 6. Recognition Rather Than Recall
- **Visual Cues**: Movie posters and titles for easy recognition
- **Persistent Navigation**: Always-visible bottom tabs for orientation
- **Search History**: Contextual search suggestions and recent searches

### 7. Flexibility and Efficiency of Use
- **Quick Actions**: Swipe gestures and touch interactions for power users
- **Multiple Access Paths**: Various ways to discover movies (trending, search, saved)
- **Responsive Design**: Optimized for different screen sizes and orientations

### 8. Aesthetic and Minimalist Design
- **Clean Interface**: Focused content presentation without clutter
- **Purposeful Elements**: Every UI element serves a specific function
- **Visual Hierarchy**: Clear information architecture with proper spacing

### 9. Help Users Recognize, Diagnose, and Recover from Errors
- **Clear Error Messages**: Descriptive error states with actionable solutions
- **Network Status**: Offline/online state awareness
- **Retry Mechanisms**: Easy ways to retry failed operations

### 10. Help and Documentation
- **Intuitive Interface**: Self-explanatory UI reducing need for external help
- **Contextual Guidance**: In-app hints and empty state instructions
- **Consistent Patterns**: Familiar interaction patterns reducing learning curve

## Features

- **Movie Discovery**: Browse trending movies with horizontal scrolling
- **Search Functionality**: Find movies by title with real-time results
- **Personal Watchlist**: Save and manage favorite movies
- **Detailed Movie Views**: Comprehensive movie information and metadata
- **Responsive Design**: Optimized for various mobile screen sizes
- **Offline Support**: Cached data for improved performance