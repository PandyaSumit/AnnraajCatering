# Vercel Deployment Guide

This guide will help you deploy the AnnRaaj Catering Services website to Vercel.

## Prerequisites

- A Vercel account (free at vercel.com)
- Git repository with your code

## Method 1: Deploy from Git Repository

1. **Push your code to GitHub, GitLab, or Bitbucket**

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "New Project"

3. **Import your repository**
   - Connect your Git provider
   - Select the repository containing your code
   - Click "Import"

4. **Configure build settings**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at a `.vercel.app` URL

## Method 2: Deploy using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**
   - Confirm project settings
   - Set build command to `npm run build`
   - Set output directory to `dist/public`

## Important Configuration

The project includes a `vercel.json` file with the following settings:

```json
{
  "builds": [
    {
      "src": "client/index.html",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

This configuration:
- Uses static build for maximum performance
- Handles client-side routing properly
- Serves the built files from `dist/public`

## Contact Form Setup

The contact form uses FormSubmit.co service which:
- Requires no API keys
- Works immediately after deployment
- Sends emails to `info@annraajcatering.com`
- Has a mailto fallback for reliability

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

This project doesn't require any environment variables for basic functionality, making deployment simple and secure.

## Troubleshooting

**Build fails?**
- Check that `npm run build` works locally
- Ensure all dependencies are in `package.json`

**Contact form not working?**
- Check browser console for errors
- Verify FormSubmit.co is not blocked by browser
- Mailto fallback should work in all cases

**Routing issues?**
- Ensure `vercel.json` is in the root directory
- Check that routes are configured for SPA

## Performance Optimization

The site is optimized for:
- Fast loading times
- Mobile-first design
- SEO-friendly structure
- Efficient image loading
- Minimal JavaScript bundle

Your site should achieve excellent performance scores on Google PageSpeed Insights.