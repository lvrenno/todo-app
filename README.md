# Todo List App

A modern, TypeScript and React-based todo list application built with Vite. This project demonstrates clean component architecture and state management in React.

## Features

- ✏️ Create and manage tasks
- ✅ Mark tasks as complete
- 🗑️ Delete tasks
- � Track completion progress
- 🎨 Modern and responsive design
- � Styled with CSS Modules

## Technologies

- React
- TypeScript
- Vite
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/         # Static assets (SVG files)
├── components/     # React components
│   ├── EmptyList/   # Empty state component
│   ├── Header/      # Application header
│   ├── InputField/  # Task input component
│   ├── Task/        # Individual task component
│   ├── TaskInfo/    # Task statistics component
│   └── TaskList/    # Task list container
├── types/         # TypeScript interfaces
├── App.tsx        # Main application component
├── global.css     # Global styles
└── main.tsx      # Application entry point
```

## Features in Detail

### Task Management
- Create new tasks with a description
- Mark tasks as complete/incomplete
- Delete tasks
- Empty state display when no tasks exist

### Task Statistics
- Track total number of tasks
- Monitor completed tasks count
- Display completion percentage

### User Interface
- Clean and modern design
- Responsive layout
- Smooth transitions and animations
- Interactive hover states
- Empty state illustrations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request