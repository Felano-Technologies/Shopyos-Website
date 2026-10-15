# Shopyos Website 🛒🇬🇭

Official website for **Shopyos** — a local commerce marketplace connecting buyers, sellers, and delivery partners across Ghana.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

---

## 📋 Table of Contents

- [Features & Tech Stack](#-features--tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Network / Mobile Testing](#-network--mobile-testing)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Styling & Design System](#-styling--design-system)
- [Contributing Guidelines](#-contributing-guidelines)
- [License & Support](#-license--support)

---

## 🚀 Features & Tech Stack

- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation / High Performance)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with custom theme configuration
- **Icons & Assets:** Optimized web assets and vector branding
- **Typography:** Google Fonts (*Inter* and *Plus Jakarta Sans*)
- **SEO & Accessibility:** Semantic HTML, responsive design, fast page load speeds

---

## ⚙️ Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js**: `v18.17.1` or higher (Node `v20.x` or `v22.x` recommended)
- **npm** (comes with Node.js) or **pnpm** / **yarn** / **bun**
- **Git**

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Felano-Technologies/Shopyos-Website.git
cd Shopyos-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the local development server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:4321` to see the site running.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run dev -- --host` | Starts the dev server and exposes it to your local network |
| `npm run build` | Builds the production-ready static site into the `./dist` directory |
| `npm run preview` | Previews the production build locally before deploying |

---

## 📱 Network / Mobile Testing

To test the website on your physical mobile device over the same Wi-Fi network:

1. Start the server with `--host`:
   ```bash
   npm run dev -- --host
   ```
2. Check the terminal output for the Network URL (e.g., `http://192.168.x.x:4321`).
3. Ensure your phone is connected to the same Wi-Fi network and visit that IP address in your mobile browser.

---

## 📁 Project Structure

```text
Shopyos-Website/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Project images and logos (e.g. iconwhite.png)
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro   # Navigation bar and mobile menu
│   │   ├── Footer.astro   # Site footer, links, and contact info
│   │   └── EcosystemCards.astro
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro # Base HTML shell with metadata and fonts
│   ├── pages/             # File-based routing for pages
│   │   ├── index.astro    # Homepage / Landing page
│   │   ├── about.astro    # About Us
│   │   ├── buyers.astro   # Buyer ecosystem page
│   │   ├── sellers.astro  # Seller ecosystem page
│   │   ├── drivers.astro  # Delivery partner page
│   │   ├── features.astro # Platform features overview
│   │   ├── faq.astro      # Frequently Asked Questions
│   │   ├── contact.astro  # Contact and support channels
│   │   ├── privacy.astro  # Privacy Policy
│   │   ├── terms.astro    # Terms of Service
│   │   └── delete-account.astro # Account deletion request page
│   └── styles/            # Global CSS styles
│       └── global.css
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind theme & color definitions
├── package.json           # Node project metadata and dependencies
└── README.md              # Project documentation
```

---

## 🌐 Pages & Routes

| Route | Page File | Description |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | Main landing page & hero section |
| `/about` | `src/pages/about.astro` | Company story and mission |
| `/buyers` | `src/pages/buyers.astro` | Features for shoppers |
| `/sellers` | `src/pages/sellers.astro` | Onboarding & tools for merchants |
| `/drivers` | `src/pages/drivers.astro` | Information for delivery partners |
| `/features` | `src/pages/features.astro` | Detailed breakdown of app features |
| `/faq` | `src/pages/faq.astro` | Common questions & answers |
| `/contact` | `src/pages/contact.astro` | Support email, phone, and WhatsApp |
| `/privacy` | `src/pages/privacy.astro` | Data protection and privacy terms |
| `/terms` | `src/pages/terms.astro` | Terms of service |
| `/delete-account` | `src/pages/delete-account.astro` | Account & data deletion process |

---

## 🎨 Styling & Design System

The project uses Tailwind CSS customized with Shopyos brand colors:

- **Navy:** `#10235f` (`bg-navy`, `text-navy`)
- **Lime:** `#84cc16` (`bg-lime`, `text-lime`)
- **Ink:** `#172033`
- **Wash:** `#f5f8fa`
- **Muted:** `#5f6b7a`

Custom fonts configured:
- **Body:** `Inter` (`font-sans`)
- **Headings / Display:** `Plus Jakarta Sans` (`font-display`)

---

## 🤝 Contributing Guidelines

1. **Fork or create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following existing conventions and component structures.
3. **Validate build:**
   ```bash
   npm run build
   ```
4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add: description of feature or fix"
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a summary of your changes.

---

## 📞 Support & Contact

- **Email:** admin@shopyosgh.com
- **Phone / WhatsApp:** +233 50 651 4687
- **Location:** Kumasi, Ashanti Region, Ghana
- **Organization:** Felano Technologies
