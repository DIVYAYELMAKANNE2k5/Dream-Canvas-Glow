# Dream Canvas Glow

A beautiful and interactive web application for capturing, visualizing, and sharing your dreams. Built with modern web technologies to create a glowing, immersive experience for dream journaling and exploration.

## 🌟 Features

- **Dream Entry Form**: Intuitive interface to record your dreams with rich text formatting and metadata
- **Dream Gallery**: Visual showcase of your dream collection with beautiful card layouts
- **Theme Toggle**: Switch between light and dark modes for comfortable viewing
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components for a polished, accessible interface
- **Fast Performance**: Powered by Vite for lightning-fast development and builds

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Package Manager**: npm/bun
- **Linting**: ESLint
- **PostCSS**: For CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dream-canvas-glow.git
   cd dream-canvas-glow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### Project Structure

```
dream-canvas-glow/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── DreamEntryForm.tsx
│   │   ├── DreamGallery.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Customization

### Themes
The application supports light and dark themes. The theme toggle component allows users to switch between modes, with preferences saved locally.

### Components
All UI components are built using shadcn/ui, which provides:
- Accessible components
- Customizable styling
- Consistent design system
- TypeScript support

### Assets
Dream-related images are stored in `src/assets/`. You can replace these with your own images or add more to expand the gallery.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the powerful frontend library

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

*Dream sweetly and glow brightly! 🌙✨*
