# Light Sage Green Elegance — Personal Portfolio Website

A sophisticated, elegant, modern, and minimal personal portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

Strictly adhering to the **Light Sage Green Elegance** design concept throughout the entire application.

---

## 🎨 Color Palette & Design Concept

The portfolio follows this refined palette:

- **Main background:** `#F7F5EC` (Warm Alabaster)
- **Soft Sage Green:** `#DCE8D5` (Cards, Badges, Subtle Accents)
- **Forest Green:** `#526B50` (Primary Action Buttons, Headers, Icons)
- **Muted Sage:** `#A3B899` (Borders, Decorative Dividers)
- **Deep Olive:** `#343D32` (High-Contrast Elegant Typography)
- **Pure White:** `#FFFFFF` (Card Surfaces, Modals)

---

## 🚀 Quick Start Guide

### 1. Install Dependencies (if starting fresh)
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:3000` or `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Generates the fully optimized static assets in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 📁 Project Folder Structure

```text
zeeenath-portfolio/
├── public/
│   ├── certificates/                               # High-res SVG & user certificate files
│   │   ├── be10x-ai-tools-workshop.svg
│   │   ├── hackathon-premier-league-2nd-runner-up.svg
│   │   ├── hackathon-premier-league-participation.svg
│   │   ├── ieee-student-membership.svg
│   │   └── learntube-project-management.svg
│   ├── profile-photo.jpg                           # (Optional) Drop your photo here
│   └── resume.pdf                                  # (Optional) Drop your resume here
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackgroundPattern.tsx               # Subtle ambient sage floating orbs & grid
│   │   │   ├── CertificateModal.tsx                # Accessible modal for viewing credentials
│   │   │   └── SectionHeader.tsx                   # Reusable pill badge & heading component
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                          # Sticky navigation bar with mobile drawer
│   │   │   └── Footer.tsx                          # Quick links, social channels & back-to-top
│   │   └── sections/
│   │       ├── HeroSection.tsx                     # Name, title, CTA buttons, photo placeholder
│   │       ├── AboutSection.tsx                    # Personal intro, interests & career goals
│   │       ├── SkillsSection.tsx                   # 5 categories: Programming, Web, Tools, etc.
│   │       ├── ProjectsSection.tsx                 # Project cards with tags, GitHub & Demo links
│   │       ├── CertificationsSection.tsx           # Verified workshops, memberships & credentials
│   │       ├── AchievementsSection.tsx             # Hackathon Premier League 2nd Runner-Up spotlight
│   │       ├── EducationSection.tsx                # Degree, coursework & academic achievements
│   │       └── ContactSection.tsx                  # Validated contact form & direct reach-out
│   ├── data/
│   │   └── portfolioData.ts                        # ⭐️ SINGLE CONFIG FILE FOR ALL YOUR DETAILS
│   ├── App.tsx                                     # Main application orchestrator
│   ├── index.css                                   # Custom sage scrollbars & glassmorphism
│   └── main.tsx                                    # React entrypoint
├── index.html                                      # Preloaded typography & meta tags
├── tailwind.config.js                              # Light sage theme tokens & shadows
├── tsconfig.json                                   # TypeScript compiler configuration
└── vite.config.js                                  # Vite development & build setup
```

---

## ✍️ How to Personalize Your Website

All content across the entire site reads from one single file:
👉 **`src/data/portfolioData.ts`**

Simply open `src/data/portfolioData.ts` and replace the placeholder fields:

### 1. Personal Information & Hero Section
- `name`: Your full name.
- `professionalTitle`: Your role or degree title (e.g. `Aspiring Software Engineer & AI Enthusiast`).
- `initials`: 2 letters used in the logo and avatar placeholder (e.g. `ZZ`).
- `shortBio`: 2-3 sentences introducing yourself.
- `statusBadge`: Text shown in the hero badge (e.g. `Open to Internships`).
- `socials`: Your real GitHub, LinkedIn, and email address.

### 2. Adding Your Profile Photo
1. Place your photo in the `public/` folder, for example `public/profile-photo.jpg`.
2. In `src/data/portfolioData.ts`, change:
   ```ts
   avatarUrl: "/profile-photo.jpg",
   ```
   *(If set to `null`, the website automatically displays an elegant monogram placeholder).*

### 3. Adding Your Resume
1. Place your PDF resume in the `public/` folder as `public/resume.pdf`.
2. In `src/data/portfolioData.ts`, change:
   ```ts
   resumeUrl: "/resume.pdf",
   ```
   Clicking **"Download Resume"** in the Hero section will directly download your PDF file.

### 4. Adding Your Own Certificate Scans / PDFs
Pre-styled, high-fidelity SVGs in the Light Sage Green theme are already included in `public/certificates/`. If you want to use your official scans:
1. Save your certificate scans (as `.png`, `.jpg`, or `.svg`) in `public/certificates/`.
2. Update the `imagePath` property in `src/data/portfolioData.ts` under `certificationsData`.

### 5. Customizing Projects
Under `projectsData` in `src/data/portfolioData.ts`:
- Replace the project titles, descriptions, and technologies with your real projects.
- Add your real repository URLs to `githubUrl` and live deployments to `liveUrl`.

### 6. Customizing Education & Achievements
Under `educationData` and `achievementsData`:
- Update your college/university name, degree, GPA, and coursework.
- Add any additional honors, hackathons, or academic awards.

---

## 🛡️ Validation & Responsive Testing

The website has been built and tested with Vite + TypeScript:
- **Zero build errors** (`npm run build` succeeds cleanly).
- **Responsive on all viewports**: Mobile (320px+), Tablet (768px+), Laptop (1024px+), and Desktop (1280px+).
- **Smooth scrolling** navigation with active section highlighting.
- **Accessible keyboard navigation** and modal escapes.
