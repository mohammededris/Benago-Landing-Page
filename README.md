# Benago

A learning platform landing page for browsing courses and registering interest.

## Tech Stack

- **Frontend:** React, Vite, React Router, TanStack React Query
- **Backend:** Express, Mongoose, Joi validation
- **Deployment:** Vercel (client + serverless API)

## Project Structure

benago-landing/
├── client/ # React SPA (Vite)
│ ├── src/
│ │ ├── components/
│ │ │ ├── Courses/ # Course catalog & details
│ │ │ ├── ErrorBoundary/ # Global error boundary
│ │ │ ├── Footer/
│ │ │ ├── Header/
│ │ │ ├── Landing/ # Home/hero page
│ │ │ ├── Registration/ # Course registration form
│ │ │ └── Skeletons/ # Loading placeholders
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ ├── vercel.json
│ └── package.json
├── server/ # Express backend
│ ├── Configs/
│ ├── Routes/
│ ├── Schema/
│ ├── Validation/
│ ├── .env
│ └── package.json
└── vercel-api/ # Serverless API (Vercel Functions)

```bash
API Endpoints
Method	Endpoint	Description
GET	/api/courses	List all courses
POST	/api/register	Submit course registration
GET	/api/health	Server health check
Features
- Browse available and coming-soon courses
- View course details with registration form
- Loading skeletons and error boundaries for graceful UX
- Responsive design
Deployment
The client is configured for Vercel deployment. The vercel-api/ directory provides serverless function equivalents of the Express API for a fully serverless setup.

---
```
