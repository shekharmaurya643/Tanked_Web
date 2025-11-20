# Tanked - Company Website

“Tanked is a modern, responsive, and animation-rich company website built with React.js and TailwindCSS, designed for clean presentation and professional branding.”

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated components
- **Professional Sections**: Hero, About, Services, Features, Testimonials, and Contact
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Fixed navigation with smooth scrolling to sections
- **Loading Animation**: Elegant loading screen with company branding

## 🛠️ Technologies Used

- **React.js** - Modern JavaScript framework for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services showcase
│   ├── Features.jsx    # Features highlight
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tanked-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary Colors**: Blue shades for main elements
- **Secondary Colors**: Gray shades for text and backgrounds

### Company Information
Update the following files to customize company information:
- Company name and logo in `Navbar.jsx`
- Company description in `Hero.jsx` and `About.jsx`
- Services in `Services.jsx`
- Contact information in `Contact.jsx`
- Footer links and company details in `Footer.jsx`

### Styling
- Modify `src/index.css` for custom CSS
- Update `tailwind.config.js` for theme customization
- Use Tailwind utility classes for component styling

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactive elements

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)


## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need support, please contact us at:
- Email: hello@tanked.com   (demo)
- Website: www.tanked.com   (demo)

---

Built with ❤️ by Shekhar Maurya
