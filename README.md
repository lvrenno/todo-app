# Social Feed App

A TypeScript and React-based social feed application that demonstrates core React concepts and modern web development practices.

## Features

- 📝 Create and delete comments on posts
- 👍 Like comments with counter
- 🎨 Responsive layout with sidebar
- 👤 User profile with avatar
- 📱 Mobile-friendly design

## Technologies

- React 19
- TypeScript
- Vite
- CSS Modules
- date-fns for date formatting
- phosphor-react for icons

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
├── assets/         # Static assets
├── components/     # React components
│   ├── Avatar/     
│   ├── Comment/    
│   ├── Header/     
│   ├── Post/       
│   └── Sidebar/    
├── App.tsx         # Main application component
├── global.css      # Global styles
└── main.tsx       # Application entry point
```

## Features in Detail

### Posts
- Display author information
- Show publish date with relative time
- Support for text and link content
- Comment system with delete functionality

### Comments
- User avatar display
- Like counter
- Delete functionality
- Responsive design

### Sidebar
- User profile information
- Custom avatar component
- Profile editing button

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request