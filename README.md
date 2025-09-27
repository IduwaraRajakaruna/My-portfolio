# 🚀 Modern Portfolio - Iduwara Rajakaruna

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience, skills, and projects.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive**: Dynamic project filtering, smooth scrolling navigation
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessible**: Semantic HTML and keyboard navigation support

## 🛠️ Technologies

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS, CSS Grid/Flexbox
- **Build Tool**: Vite
- **Animations**: CSS transitions and custom keyframes
- **Icons**: Emoji-based icons for better compatibility

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation with scroll effects
│   ├── Hero.jsx        # Landing section with CTA
│   ├── About.jsx       # Personal introduction
│   ├── Skills.jsx      # Technical skills showcase
│   ├── Experience.jsx  # Work experience timeline
│   ├── Education.jsx   # Academic background
│   ├── Projects.jsx    # Portfolio projects
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with links
├── App.jsx            # Main application
├── index.css          # Global styles with Tailwind
└── main.jsx          # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Visit `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Personal Information
Update the following components with your details:

1. **Hero Section** - Name, title, and professional summary
2. **About Section** - Personal description and experience
3. **Skills Section** - Technical skills and proficiency levels
4. **Experience Section** - Work history and achievements
5. **Education Section** - Academic background and certifications
6. **Projects Section** - Portfolio projects with links
7. **Contact Section** - Contact information and social links

### Deployment Options

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Upload dist folder after `npm run build`
- **GitHub Pages**: Use gh-pages package

## 📧 Contact

- **Email**: iduwararajakaruna@gmail.com
- **LinkedIn**: [linkedin.com/in/iduwararajakaruna](https://linkedin.com/in/iduwararajakaruna)
- **GitHub**: [github.com/iduwararajakaruna](https://github.com/iduwararajakaruna)

---

**Built with ❤️ using React & Tailwind CSS**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
