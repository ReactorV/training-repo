# Deploying to Vercel

This guide will help you deploy your Vite + React app to Vercel for free.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. Your code pushed to a repository

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a repository on GitHub and push
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login (free)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Configure:
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `yarn build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `yarn install` (or `npm install`)
6. Click **"Deploy"**

Vercel will automatically:
- Install dependencies
- Build your app
- Deploy it to a production URL

### Step 3: Access Your App

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Automatic HTTPS**: Enabled by default
- **Custom Domain**: Can be added in project settings

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
# or
yarn global add vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

## Configuration

The project includes a `vercel.json` file with the following settings:

- **Build Command**: `yarn build`
- **Output Directory**: `dist` (Vite's default build output)
- **Framework**: Vite
- **SPA Routing**: Configured to serve `index.html` for all routes

## Environment Variables

If you need environment variables:

1. Go to your project on Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables
4. Redeploy

Access them in your code with `import.meta.env.VITE_YOUR_VARIABLE`

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches (creates preview URLs)

## Troubleshooting

### Build Fails

- Check Node.js version (Vercel uses Node 20.x by default)
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Styles Not Loading

- Ensure `@tailwindcss/vite` is in `devDependencies`
- Check that `globals.css` is imported in `main.tsx`

### Routing Issues

- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Edge Network (CDN)

## Next Steps

After deployment:
1. Add a custom domain (optional)
2. Set up environment variables if needed
3. Configure analytics (optional)
4. Enable automatic deployments from your Git repository

For more information, visit [Vercel Documentation](https://vercel.com/docs)

