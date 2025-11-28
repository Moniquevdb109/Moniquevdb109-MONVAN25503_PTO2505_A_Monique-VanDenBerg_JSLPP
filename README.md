# Kanban Board (JSL Portfolio Piece)

## Overview
I built and deployed a responsive Kanban board app based on the provided Figma design. The app fetches initial tasks from an API, saves everything to localStorage for persistence, and supports editing/deleting tasks through modals. I also implemented a hideable sidebar (desktop + mobile menu), a light/dark theme toggle, and a priority system with automatic sorting.

## Live Demo + Code
- **Deployed app:** *https://createkanbanboard.netlify.app/*
- **GitHub repo:** *https://github.com/Moniquevdb109/Moniquevdb109-MONVAN25503_PTO2505_A_Monique-VanDenBerg_JSLPP.git*
- **Project walkthrough video (5–10 min):** *https://www.loom.com/share/45dc0c1e05df4fb695e8ea2c0f9e87c4*

## Features

### Tasks + Data
- Fetches initial task data from: `https://jsl-kanban-api.vercel.app/`
- Saves tasks to **localStorage** so they persist after refresh
- Renders tasks into **To Do / Doing / Done** columns

### Create / Edit / Delete (Modals)
- Add new tasks via a modal form (validated inputs)
- Edit existing tasks (title, description, status, priority)
- Delete tasks from the task modal with a **confirmation modal**
- UI updates immediately after any change (re-render)

### Priority System
- Priority levels: **High / Medium / Low**
- Priority is shown on cards using a **colored dot**
- Tasks are sorted **within each column**: **High → Medium → Low**
- Priority is saved in localStorage so sorting stays correct after refresh

### Sidebar (Desktop + Mobile)
- Desktop sidebar can be hidden and restored (👀 button)
- Sidebar hidden state is saved in localStorage
- Mobile sidebar works like a menu:
  - Opens from the top icon
  - Closes with an X button
  - Includes a dim background backdrop

### Theme Toggle
- Light/dark mode toggle in the sidebar/mobile menu
- Theme preference is saved in localStorage
- App styling updates via a `dark-theme` class + CSS variables
- Icons/logos swap for light/dark using `data-light-src` / `data-dark-src`

## Tech Used
- HTML, CSS, JavaScript
- localStorage for persistence
- Fetch API for initial data
- Netlify for deployment