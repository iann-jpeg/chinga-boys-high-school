# Chinga Boys High School - Landing Page

A modern, responsive landing page for Chinga Boys High School built with React and TailwindCSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based**: Modular React components for easy maintenance
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Interactive Elements**: Hover effects, smooth scrolling, and form handling
- **SEO Friendly**: Semantic HTML structure

## Sections

1. **Header/Navbar**: Logo, navigation menu, and join button
2. **Hero Section**: School branding, motto, and call-to-action
3. **About Section**: School information and statistics
4. **Academics**: Program offerings and curriculum details
5. **Gallery**: Photo gallery with category filtering
6. **Contact**: Contact information and inquiry form
7. **Footer**: Links, social media, and newsletter signup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd chinga-boys-high-school
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation header
│   ├── Hero.js        # Hero section with school branding
│   ├── About.js       # About school section
│   ├── Academics.js   # Academic programs
│   ├── Gallery.js     # Photo gallery
│   ├── Contact.js     # Contact information and form
│   └── Footer.js      # Footer with links and info
├── App.js             # Main app component
├── index.js           # React DOM rendering
└── index.css          # Global styles and Tailwind imports
```

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- `school-blue`: #1e3a8a
- `school-light-blue`: #3b82f6
- `school-teal`: #14b8a6

### Content
To update content, edit the respective component files:
- School information: `Hero.js` and `About.js`
- Academic programs: `Academics.js`
- Contact details: `Contact.js`
- Gallery images: `Gallery.js`

### Styling
All styling is done using TailwindCSS utility classes. Custom styles can be added to `index.css`.

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/chinga-boys-high-school",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@chingaboyshigh.ac.ke
- Phone: +254 700 123 456

---

Built with ❤️ for Chinga Boys High School