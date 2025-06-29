# AnnRaaj Catering Services Website

A modern, responsive website for AnnRaaj Catering Services showcasing traditional Gujarati and Indian catering expertise.

## Features

- ✅ Fully responsive design
- ✅ Traditional Indian/Gujarati aesthetic
- ✅ Custom SVG logo with authentic catering elements
- ✅ Contact form with email integration
- ✅ Gallery showcase
- ✅ Services overview
- ✅ Gujarati text support
- ✅ Mobile-first approach
- ✅ No backend dependencies

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/annraaj-catering)

### Option 2: Manual Deploy

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repo in the Vercel dashboard
3. Vercel will automatically deploy on every push to main branch

## Build Configuration

The project uses Vite for building. The build outputs to `dist/public` directory.

### Vercel Configuration

The `vercel.json` file is included with the following configuration:
- Static build using Vite
- SPA routing for client-side navigation
- Optimized for performance

## Contact Form

The contact form uses a `mailto:` link approach that opens the user's default email client with pre-filled content. This ensures:
- No server dependencies
- Works offline
- Compatible with all email clients
- No API keys required

## Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter + Noto Sans Gujarati

## Business Information

- **Name**: AnnRaaj Catering Services
- **Experience**: 32+ years (since 1992)
- **Location**: Ved Road, Surat, Gujarat 395004
- **Phone**: 9879381605
- **Specialization**: Traditional Gujarati and Indian cuisine

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utility functions
│   └── index.html         # Entry HTML file
├── vercel.json           # Vercel deployment config
└── README.md            # This file
```

## License

MIT License - See LICENSE file for details