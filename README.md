# 💼 1MDM Seller Platform – Internship Assessment

This is a fully responsive frontend implementation of the **1MDM Seller Platform** as part of my internship assessment project. The goal is to build a clean, scalable, and mobile-friendly B2B medical equipment marketplace landing page using **React** and **Tailwind CSS**.

---

## 🚀 Tech Stack

- **React** (with functional components + hooks)
- **Tailwind CSS** (utility-first responsive styling)
- **React Icons** (for icons like quotes, arrows)
- **Responsive Design** (mobile-first approach)
- **Image Assets** stored locally in `/assets`

---

## 📁 Project Structure

ReactApp/
├── public/
│ └── favicon.ico # Site icon
│
├── src/ # Source code
│ ├── assets/ # Images and media assets
│ │ ├── logo.png
│ │ ├── person1.jpg
│ │ ├── person2.jpg
│ │ ├── person3.jpg
│ │ ├── laptop.jpg
│ │ ├── analysis.jpg
│ │ └── service.jpg
│ │
│ ├── components/ # React UI components
│ │ ├── Navigation.jsx
│ │ ├── HeroSection.jsx
│ │ ├── Highlited.jsx
│ │ ├── InsightTabs.jsx
│ │ ├── TestimonialCarousel.jsx
│ │ └── Footer.jsx
│ │
│ ├── App.jsx # Root component
│ ├── index.css # Tailwind CSS & global styles
│ └── main.jsx # React DOM rendering entry point
│
├── .gitignore # Files to ignore by Git
├── index.html # HTML template for Vite
├── package.json # Project metadata & dependencies
├── postcss.config.js # Tailwind & PostCSS config
├── tailwind.config.js # Tailwind theme and extensions
└── vite.config.js # Vite build & dev server config

---

## 📌 Features Implemented

| Section                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **Navigation**             | Top info bar + fixed navbar (on scroll), fully responsive                   |
| **Hero Section**           | Headline, CTA buttons, key business stats, mobile-friendly layout           |
| **Highlight Banner**       | Bold center-aligned promo + subtext                                         |
| **Tool Tabs**              | Interactive tab layout with right-side image and description toggle         |
| **Carousel (Testimonials)**| Auto/manual slide change with animations, image + description per slide     |
| **Footer**                 | Fully structured footer with platform links, contact, and copyright info    |

---

## 📱 Responsiveness

Every section is fully responsive and adapts to:

- **Mobile screens (≤ 640px)** – stacked layout, buttons full-width, center-aligned
- **Tablet screens (≤ 768px)** – optimized font sizes and spacing
- **Desktop (≥ 1024px)** – grid layouts, side-by-side components, hover effects

---

## 🎯 Notes

- Placeholder images used from `/assets`; in production, replace with real images from CDN or backend.
- Links like `/pricing.php` or `/contact.php` assumed to exist on the backend.
- Tailwind classes ensure smooth hover transitions, shadows, spacing, and typography.

---

## 📌 How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
