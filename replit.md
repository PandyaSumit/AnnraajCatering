# AnnRaaj Catering Services - Full-Stack Web Application

## Overview

This is a modern full-stack web application for AnnRaaj Catering Services, a traditional Gujarati and Indian catering company based in Surat. The application serves as a business website showcasing their services, gallery, and contact information with a focus on authentic cultural presentation and user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the entire stack
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Vite dev server with Express.js integration
- **Type Safety**: Full TypeScript coverage with strict configuration

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Hero section, Footer
- **Content Sections**: About, Services, Gallery, Contact forms
- **UI Library**: Complete shadcn/ui component set (buttons, forms, dialogs, etc.)
- **Internationalization**: Gujarati text support with custom fonts
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Components
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Route Handler**: Express.js route registration system
- **Database Schema**: User management with Drizzle schema definitions
- **Development Server**: Vite integration for SSR-like development experience

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Definitions**: Shared TypeScript interfaces
- **Database Models**: User model with insert/select types

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **Server Processing**: Express.js routes handle requests and interact with storage layer
3. **Data Storage**: Drizzle ORM manages PostgreSQL operations
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: TanStack Query caches and synchronizes server state
6. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Via @neondatabase/serverless driver
- **Migrations**: Managed through Drizzle Kit

### UI Libraries
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework  
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Inter and Noto Sans Gujarati fonts

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **TypeScript**: Full type checking and IntelliSense
- **ESBuild**: Fast production builds
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite HMR for frontend, tsx for backend auto-restart
- **Environment**: NODE_ENV=development with development-specific features

### Production Build
- **Frontend Build**: Vite builds optimized React bundle to `dist/public`
- **Backend Build**: ESBuild bundles Express.js server to `dist/index.js`
- **Asset Handling**: Static file serving for production builds
- **Database**: Drizzle migrations applied via `npm run db:push`

### Production Deployment
- **Start Command**: `npm start` runs the built Express.js server
- **Static Serving**: Express serves built React app from dist/public
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed sessions for production scalability

## Changelog

Changelog:
- June 29, 2025: Initial setup
- June 29, 2025: Updated business information - changed name to AnnRaaj (capital R), updated phone to 9879381605, changed location from Ahmedabad to Ved Road, Surat, Gujarat 395004
- June 29, 2025: Updated founding year from 2008 to 1992, changed experience from 15+ to 32+ years throughout website

## User Preferences

Preferred communication style: Simple, everyday language.