# Multi-Framework Ticket Web App – Twig Version

This is the **Twig (HTML templating)** implementation of the Multi-Framework Ticket Web App for Frontend Stage 2.  
It replicates the same ticket management system built in React and Vue, but rendered server-side using **Twig templates**.  
This version focuses on templating structure, consistent layout, and dynamic content simulation using mock data or JSON.

---

## ✦ Overview
The app includes:
- **Landing Page** – Wavy hero section, decorative circles, and clear call-to-action buttons.
- **Authentication** – Login and Signup pages with form validation and session simulation.
- **Dashboard** – Summary statistics (Total, Open, Resolved Tickets) and navigation links.
- **Ticket Management (CRUD)** – Create, Read, Update, Delete tickets with inline validation and feedback.
- Fully responsive layout, semantic structure, and accessibility compliance.

---

## ✦ Features

### Landing Page
- Hero section with a bottom **wavy SVG background**.  
- At least one **decorative circle** overlapping the hero area.  
- Box-styled feature sections with shadows and rounded corners.  
- Consistent footer across all pages.  
- Responsive and centered layout (max-width: 1440px).

### Authentication
- Separate Login and Signup pages built with Twig forms.  
- Inline validation for empty or invalid inputs.  
- Simulated authentication using PHP sessions or local JSON storage.  
- Successful login redirects to the Dashboard.

### Dashboard
- Displays ticket statistics:  
  - Total Tickets  
  - Open Tickets  
  - Resolved Tickets  
- Navigation links to the Ticket Management page.  
- Logout button clears session and redirects to Login.

### Ticket Management (CRUD)
- **Create** – Form for new ticket creation with required field validation.  
- **Read** – List existing tickets as cards or table rows with colored status tags.  
- **Update** – Editable ticket details with validation feedback.  
- **Delete** – Confirmation prompt before removing a ticket.  
- Status color scheme:  
  - `open → green`  
  - `in_progress → amber`  
  - `closed → gray`

---

## ✦ Data Validation & Error Handling
- Required fields: `title`, `status`.  
- Valid `status` values: `"open"`, `"in_progress"`, `"closed"`.  
- Validation errors displayed inline below fields or as alerts/snackbars.  
- Unauthorized access redirects to the Login page.  
- Descriptive error messages (e.g. “Your session has expired — please log in again.”).

---

## ✦ Accessibility & Layout
- Semantic HTML with proper use of `<main>`, `<header>`, `<section>`, `<form>`, and `<label>`.  
- Alt text for all images and visible focus indicators.  
- Responsive design using CSS Grid or Flexbox.  
- Centered layout with a maximum content width of 1440px.  

---

## ✦ Tech Stack
- **Twig** templating engine  
- **PHP 8+** (for running Twig)  
- **Vanilla CSS** or SCSS for styling  
- **Mock JSON / PHP arrays** for simulating ticket data and sessions  
- **JavaScript for toasts or inline validation feedback

---
## ✦ Demo Credentials
- Email: demo.ticket@app

- Password: password123
---

## ✦ Local Setup
```bash
# Clone the repo
git clone <repo-url>

# Navigate into the twig folder
cd twig

# Install dependencies (if using Composer)
composer install

# Start a PHP local server
php -S localhost:8000 -t public
