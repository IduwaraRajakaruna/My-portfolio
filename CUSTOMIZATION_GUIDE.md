# 🎨 Portfolio Customization Guide

Welcome to your modern portfolio! This guide will help you customize every aspect of your portfolio to make it uniquely yours.

## 📁 File Structure Overview

```
src/
├── components/
│   ├── Header.jsx      # 🧭 Navigation bar and menu
│   ├── Hero.jsx        # 🏠 Landing section with intro
│   ├── About.jsx       # 📚 Personal background & info
│   ├── Skills.jsx      # 🛠️ Technical skills & education
│   ├── Projects.jsx    # 🚀 Portfolio projects showcase
│   ├── Contact.jsx     # 📧 Contact form & information
│   └── Footer.jsx      # 🦶 Footer with links & branding
├── App.jsx            # Main app structure
└── index.css          # Global styles & Tailwind config
```

## 🎯 Quick Customization Checklist

### 1. 🏠 Hero Section (`Hero.jsx`)
- [ ] **Line 110-113**: Update your name (first & last name)
- [ ] **Line 118**: Update your professional title/role
- [ ] **Line 124**: Update your personal description/bio
- [ ] **Line 188**: Update profile photo alt text
- [ ] **Line 130-140**: Update call-to-action buttons and links

### 2. 📚 About Section (`About.jsx`)
- [ ] **Lines 48-62**: Update education, specialization, and mission cards
- [ ] **Lines 65-71**: Update your current focus areas/skills
- [ ] **Line 90**: Update section title if needed
- [ ] **Line 95**: Update section description

### 3. 🛠️ Skills Section (`Skills.jsx`)
- [ ] **Lines 36-59**: Update skill categories and technologies
- [ ] **Lines 63-85**: Update achievements and certifications
- [ ] **Line 120**: Update your university name
- [ ] **Line 121**: Update your degree and graduation year
- [ ] **Lines 122-130**: Update your academic achievements

### 4. 🚀 Projects Section (`Projects.jsx`)
- [ ] **Lines 35-50**: Replace example project with your actual project
- [ ] **Line 37**: Project title
- [ ] **Line 38**: Project description
- [ ] **Line 39**: Project screenshot/image URL
- [ ] **Line 40**: Technologies used array
- [ ] **Line 42-43**: Challenge and solution descriptions
- [ ] **Line 44**: Key features array
- [ ] **Lines 45-46**: Live demo and GitHub repository URLs
- [ ] **Line 47**: Set featured status (true/false)

### 5. 📧 Contact Section (`Contact.jsx`)
- [ ] **Line 60**: Your email address
- [ ] **Line 61**: Email link (mailto:)
- [ ] **Line 66**: Your phone number
- [ ] **Line 67**: Phone link (tel:)
- [ ] **Line 72**: Your location
- [ ] **Lines 78-85**: Update social media links (GitHub, LinkedIn, etc.)

### 6. 🧭 Header Section (`Header.jsx`)
- [ ] **Lines 36-42**: Update navigation menu items
- [ ] **Line 100**: Update your name/logo in navigation
- [ ] **Line 155**: Update "Let's Talk" button text if needed

### 7. 🦶 Footer Section (`Footer.jsx`)
- [ ] **Line 107**: Update your name in footer branding
- [ ] **Line 108**: Update personal description
- [ ] **Lines 138-150**: Update quick links to match your sections
- [ ] **Lines 160-175**: Update social media links
- [ ] **Line 210**: Update copyright text and year

## 🖼️ Image Customization

### Profile Photos
- **Location**: `/public/images/profile.jpg`
- **Used in**: Hero section (circular) and About section (rectangular)
- **Recommended**: High-quality, professional photo
- **Format**: JPG, PNG (avoid HEIC for web compatibility)

### Project Screenshots
- **Location**: Update image URLs in `Projects.jsx`
- **Options**: 
  - Use Unsplash URLs (current setup)
  - Upload to `/public/images/` folder
  - Use external hosting (Cloudinary, etc.)
- **Size**: Recommended 600x400px minimum

## 🎨 Styling & Colors

### Main Color Scheme
- **Primary Blue**: `from-blue-600 to-indigo-600`
- **Background**: Gray to blue gradient
- **Text**: Gray-900 for dark, Gray-600 for medium

### Customizing Colors
1. **Global Colors**: Edit `tailwind.config.js`
2. **Component Colors**: Update className props in components
3. **Gradients**: Modify `bg-gradient-to-*` classes

## 🔗 Adding New Sections

### Step 1: Create Component
```jsx
// src/components/NewSection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const NewSection = () => {
  return (
    <section id="newsection" className="section-padding">
      {/* Your content */}
    </section>
  )
}

export default NewSection
```

### Step 2: Add to App.jsx
```jsx
import NewSection from './components/NewSection'

// Add in main tag
<NewSection />
```

### Step 3: Update Navigation
```jsx
// In Header.jsx navItems array
{ name: 'New Section', href: '#newsection' }
```

## 📱 Social Media Links

### Updating Social Links
1. **Contact.jsx**: Lines 78-85 for contact section
2. **Footer.jsx**: Lines 160-175 for footer section

### Supported Platforms
- GitHub (🐙)
- LinkedIn (💼)
- Twitter (🐦)
- Email (📧)
- Add more by updating the arrays

## 🚀 Deployment Ready Checklist

Before deploying your portfolio:

- [ ] All personal information updated
- [ ] Real project screenshots added
- [ ] Working live demo and GitHub links
- [ ] Contact information verified
- [ ] Social media links tested
- [ ] Profile photo optimized and displaying
- [ ] All placeholder text replaced
- [ ] Navigation links working correctly
- [ ] Mobile responsiveness tested

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Need Help?

If you need assistance with customization:
1. Check the comments in each component file (marked with 📝)
2. Refer to this guide for step-by-step instructions
3. Test changes in development mode before deploying

## 🎉 Tips for Success

1. **Start Small**: Update one section at a time
2. **Test Frequently**: Run `npm run dev` to see changes
3. **Keep Backups**: Use Git to track your changes
4. **Mobile First**: Always test on different screen sizes
5. **Performance**: Optimize images before adding them

---

**Built with ❤️ using React, Framer Motion & Tailwind CSS**