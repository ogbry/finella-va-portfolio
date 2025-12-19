# Marie Finella D. Alfuente - Virtual Assistant Portfolio

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS.

## Features

- Modern and professional design
- Fully responsive layout with mobile hamburger menu
- Smooth scrolling navigation with scroll animations
- Contact form with API integration
- Snackbar notifications for success/error messages
- Social media links
- Canva Projects showcase section
- Download Resume functionality
- Interactive components
- Optimized for performance

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher recommended).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
fin-portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Configuration

### Contact Form API

The contact form is integrated with RestDB.io. The API configuration is in `src/components/Contact.tsx`:

```typescript
const response = await fetch('https://portfolio-235a.restdb.io/rest/mails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': 'your-api-key-here',
  },
  body: JSON.stringify(requestBody),
})
```

**Note:** The API key is currently hardcoded. For production, consider using environment variables.

### Resume File

Add your resume PDF file to the `public` folder:

1. Create a `public` folder in the root directory if it doesn't exist
2. Add your resume as `resume.pdf` in the public folder
3. The download button in the Hero section will automatically use this file

### Social Media Links

Update your social media URLs in `src/components/Contact.tsx` (lines ~166-212):

```typescript
href="https://linkedin.com/in/yourprofile"  // Replace with your profile
href="https://facebook.com/yourprofile"
href="https://twitter.com/yourprofile"
href="https://instagram.com/yourprofile"
```

### Canva Projects

Update the projects array in `src/components/Projects.tsx` with your actual Canva projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    category: 'Category',
    image: 'path-to-your-image.jpg',
  },
  // ... more projects
]
```

## Customization

You can easily customize the content by editing the component files in the `src/components/` directory.

To change the color scheme, edit the `tailwind.config.js` file.

## License

This project is open source and available for personal use.
