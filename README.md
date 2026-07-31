# Career Hub

A React + TypeScript application that displays open roles with search and filtering capabilities.

---

## Tech Stack

- React
- TypeScript
- Vite
- TanStack Query
- Material UI

---

## Features

- Search jobs
- Department filter
- Location filter
- Employment type filter
- Loading skeleton
- Empty state
- Error state
- Responsive layout

---

## Running locally

```bash
npm install

npm run dev
```

---

## Mock data

Due to CORS restrictions on the provided API in browser-based environments (e.g. GitHub Pages and CodeSandbox), the application supports switching between the live API and mock data using an environment variable.

```env
VITE_USE_MOCK=true
```

Set

```env
VITE_USE_MOCK=false
```

to use the live API.