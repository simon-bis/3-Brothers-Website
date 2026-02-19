# 3 Brothers Ottawa Landscaping Website

## Overview
This is a React-based website for 3 Brothers Ottawa Landscaping business. It features a clean and modern design, showcasing the services offered and providing potential clients with easy access to contact information. The site includes multi-language support (English/French) and Google Analytics integration.

## Project Structure
```
3 Brothers Website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── 3D_Design/
│   │   ├── About_us/
│   │   ├── Decks_&_Railings/
│   │   ├── Driveways/
│   │   ├── Fences/
│   │   ├── Fire_Pits/
│   │   ├── Interlock/
│   │   ├── Landscaping/
│   │   ├── Pergolas/
│   │   ├── Pressure_Washing_&_Resand/
│   │   ├── Relevels_&_Repairs/
│   │   ├── Retaining_Walls/
│   │   ├── Services_Images/
│   │   └── Stamped_Concrete/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Reviews.js
│   ├── context/
│   │   └── LanguageContext.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   └── services/
│   │       ├── Decks.js
│   │       ├── Fences.js
│   │       ├── Interlock.js
│   │       └── Landscaping.js
│   ├── App.js
│   ├── index.js
│   ├── config.js
│   ├── translations.js
│   ├── App.css
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Routes
- **`/`** - Home page with service overview
- **`/about-us`** - About page with company information
- **`/projects`** - Browse all completed projects by service type
- **`/interlock`** - Interlock service details and projects
- **`/decks`** - Decks & railings service details and projects
- **`/landscaping`** - Landscaping service details and projects
- **`/fences`** - Fences service details and projects
- **`/contact-us`** - Contact form and business information

## Features
- **Multi-language Support**: English and French language options via context
- **Responsive Design**: Mobile-friendly layout for all devices
- **Dynamic Image Gallery**: Automatically loads project images from asset folders
- **Google Analytics Integration**: Tracks user interactions and page views
- **SEO Optimization**: Canonical URLs and meta tags on all pages
- **Contact Form**: Integrated with Formspree for email submissions
- **Service Showcase**: Detailed pages for each landscaping service
- **Project Portfolio**: Gallery showcasing completed projects

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd "3 Brothers Website"
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration:
     ```env
     REACT_APP_GA_MEASUREMENT_ID=your-google-analytics-id
     REACT_APP_DOMAIN=https://www.3brothersottawalandscaping.ca
     REACT_APP_EMAIL=your-email@example.com
     REACT_APP_PHONE=+1234567890
     REACT_APP_PHONE_DISPLAY=(123) 456-7890
     REACT_APP_FORM_ENDPOINT=https://formspree.io/f/your-form-id
     ```

5. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Environment Configuration

The project uses environment variables for configuration. Create a `.env` file in the root directory based on `.env.example`:

- **`REACT_APP_GA_MEASUREMENT_ID`**: Google Analytics measurement ID
- **`REACT_APP_DOMAIN`**: Base URL for canonical links and metadata
- **`REACT_APP_EMAIL`**: Contact email address
- **`REACT_APP_PHONE`**: Phone number in tel format
- **`REACT_APP_PHONE_DISPLAY`**: Phone number for display
- **`REACT_APP_FORM_ENDPOINT`**: Formspree endpoint for contact form

**Note**: Never commit the `.env` file. It's included in `.gitignore`.

## Technologies Used
- **React** - UI framework
- **React Router** - Client-side routing
- **React GA4** - Google Analytics integration
- **React Helmet Async** - SEO meta tags management
- **CSS** - Styling
- **Formspree** - Form backend service

## Available Scripts

In the project directory, you can run:

- `npm start` - Run the development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## License
This project is licensed under the MIT License.