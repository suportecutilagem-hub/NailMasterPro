# Project Architecture Overview

## Overview

This is a full-stack web application built with React, Express, and Drizzle ORM. The frontend uses Shadcn UI components with Tailwind CSS for styling. The application has a landing page design for what appears to be a nail care course with sections for Course Content, Results, Bonuses, Testimonials, FAQ, and CTA sections.

The backend is a simple Express server with a storage interface that currently uses an in-memory implementation but is configured to use PostgreSQL with Drizzle ORM when deployed.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight router)
- **State Management**: React Query for async state
- **UI Components**: Shadcn UI component library
- **Styling**: Tailwind CSS with a custom theme
- **Animations**: Framer Motion

### Backend

- **Framework**: Express.js
- **Database Interface**: Drizzle ORM
- **Database**: PostgreSQL configuration exists but currently using in-memory storage
- **API Structure**: RESTful API with prefixed routes (/api)

### Development Environment

- **Build Tool**: Vite for the frontend, esbuild for the backend
- **Deployment**: Replit-specific configuration for easy deployment
- **Type Checking**: TypeScript throughout the codebase

## Key Components

### Frontend Components

1. **UI Components**: A comprehensive set of UI components from Shadcn UI, including:
   - Basic elements: Button, Input, Card, etc.
   - Complex components: Accordion, Tabs, Toast, etc.

2. **Page Sections**: Components for each section of the landing page:
   - Navbar
   - Hero
   - CourseContent
   - Results
   - Bonus
   - Testimonials
   - CourseOverview
   - FAQ
   - CTA
   - Footer

3. **State Hooks**: Custom hooks for:
   - Toast notifications
   - Mobile device detection
   - API queries (via React Query)

### Backend Components

1. **Server Setup**: Express server with middleware for JSON parsing and logging
2. **Storage Interface**: Abstract interface for data operations with an in-memory implementation
3. **Database Schema**: Drizzle ORM schema for user entities
4. **Routes**: API routes structure with prefix (/api)

## Data Flow

1. **Frontend to Backend**:
   - React Query is used for data fetching and mutation
   - API requests are made to the Express backend with prefixed routes (/api)
   - Response data is cached and managed by React Query

2. **Backend to Database**:
   - Storage interface abstracts database operations
   - Currently using in-memory storage, but configured for PostgreSQL
   - Drizzle ORM handles database schema and queries

3. **Authentication Flow**:
   - Basic user schema exists with username/password fields
   - Authentication implementation is incomplete but the structure is in place

## External Dependencies

### Frontend Dependencies
- React and React DOM
- Wouter for routing
- React Query for data fetching
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Framer Motion for animations
- Shadcn UI component system

### Backend Dependencies
- Express.js for the server
- Drizzle ORM for database interactions
- Drizzle Zod for schema validation
- Neon Database serverless connector

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development Mode**:
   - Runs with `npm run dev` which starts both frontend and backend
   - Vite dev server for the frontend with HMR
   - Nodemon-like functionality with tsx for the backend

2. **Production Build**:
   - Frontend: Vite builds static assets to dist/public
   - Backend: esbuild bundles server code to dist/index.js
   - Both are packaged together for a single deployment

3. **Database**:
   - Configured to use PostgreSQL
   - Environment variable `DATABASE_URL` required for database connection
   - Migration system with Drizzle Kit