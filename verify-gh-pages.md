# GitHub Pages Deployment Verification

This document helps verify your GitHub Pages setup is correct.

## Quick Verification Steps

### 1. Check Your Repository Type

**Root Domain Site:**
- Repository name: `username.github.io` 
- URL will be: `https://username.github.io`
- Base path: `/` (default)

**Project Site:**
- Repository name: anything other than `username.github.io`
- URL will be: `https://username.github.io/repository-name`
- Base path: `/repository-name`

### 2. Configure the Workflow

If you have a **project site** (not `username.github.io`), edit `.github/workflows/deploy.yml`:

```yaml
env:
  VITE_BASE_PATH: /${{ github.event.repository.name }}
```

Replace `github.event.repository.name` with your actual repo name, or use the variable (it should work automatically).

### 3. Test Locally

Before deploying, test with the base path locally:

**For project site:**
```bash
VITE_BASE_PATH=/your-repo-name npm run build
npm run preview
```

Visit `http://localhost:4173/your-repo-name` and verify assets load correctly.

**For root domain:**
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` and verify everything works.

### 4. Verify Built Files

After building, check `dist/index.html`:
- For project site: Should reference assets like `/your-repo-name/assets/...`
- For root domain: Should reference assets like `/assets/...`

### 5. Enable GitHub Pages

1. Go to Settings → Pages
2. Source: Select **"GitHub Actions"** (not "Deploy from a branch")
3. Save

### 6. Deploy

Push to `main` branch. Check Actions tab for deployment status.

## Common Issues

### Blank Page
- Check browser console for 404 errors
- Verify base path matches your repository name
- Ensure GitHub Pages source is set to "GitHub Actions"

### Assets Not Loading
- Verify `base` in `vite.config.ts` matches your deployment URL
- Check that `basename` in `BrowserRouter` matches (already configured)

### 404 on Refresh
- This is expected for SPAs on GitHub Pages
- GitHub Pages will serve `index.html` for all routes if configured correctly
- The `basename` prop handles this automatically

