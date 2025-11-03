# GitHub Pages Deployment Guide

This guide will help you deploy this Vite + React website to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository pushed to GitHub

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### Step 2: Configure Base Path (If Deploying to Project Site)

**For Root Domain (username.github.io):**
- No changes needed! The workflow is already configured for root domain deployment.

**For Project Site (username.github.io/repo-name):**
1. Open `.github/workflows/deploy.yml`
2. Find the line with `VITE_BASE_PATH: /your-repo-name`
3. Uncomment it and replace `your-repo-name` with your actual repository name
4. Save and commit the change

### Step 3: Deploy

1. Push your code to the `main` branch (or merge a pull request)
2. The GitHub Actions workflow will automatically:
   - Build your Vite project
   - Deploy it to GitHub Pages
3. Check the **Actions** tab in your repository to see the deployment progress
4. Once complete, your site will be live at:
   - Root domain: `https://your-username.github.io`
   - Project site: `https://your-username.github.io/your-repo-name`

## Manual Deployment

If you want to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# For project site, set the base path:
# VITE_BASE_PATH=/your-repo-name npm run build

# The dist folder will contain your built files
# You can upload this to GitHub Pages manually if needed
```

## Troubleshooting

### 404 Errors on Page Refresh

If you're getting 404 errors when refreshing pages:
- Make sure you've set the correct `base` path in `vite.config.ts`
- Ensure the `basename` prop is set in `BrowserRouter` (already configured)
- Check that your GitHub Pages source is set to "GitHub Actions"

### Assets Not Loading

- Verify the `base` path in `vite.config.ts` matches your repository name
- Check browser console for any path-related errors
- Ensure all assets are using relative paths or the configured base path

## Notes

- The workflow automatically deploys on every push to `main`
- You can also manually trigger deployments from the **Actions** tab
- Build artifacts are stored in the `dist` folder (gitignored)

