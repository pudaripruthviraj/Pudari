# Deepika & Pruthviraj Wedding Invitation (Chittoor & Nizamabad Edition)

This is the standalone, cloned edition of the wedding invitation project featuring:
- **October 29 Evening Reception**: Added Grand Celebration Reception at Vijayadurga Kalyana Mandapam, Near Durgamma Temple, Vellore Road, Greamspet, Chittoor, Andhra Pradesh 517002.
- **Chapter 2 Removed**: Simplified 4-chapter narrative flow (1. Invitation, 2. Ceremonies, 3. Venues & RSVP, 4. Blessings & Memories).
- **Cartoon Caricature**: Couple caricature portrait of Deepika & Pruthviraj.
- **English-First**: Pure English by default with zero Telugu script unless explicitly selected via the language selector.
- **Vercel-Ready**: Fully configured with `vercel.json`, `package.json`, and Vite SPA build setup.

## How to Push to GitHub & Deploy on Vercel

### 1. Push to GitHub (Fixing "Unable to push changes")

If your local push is failing, follow these steps based on the scenario:

#### Scenario A: Pushing for the first time
```bash
# Navigate to the folder you want to deploy (either root or cloned-project)
cd cloned-project

# Initialize git if not already initialized
git init -b main

# Add all files including public assets & images
git add .

# Commit changes
git commit -m "feat: complete wedding portal with October 29 Chittoor reception and assets"

# Add your GitHub repository remote
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git

# Push to GitHub
git push -u origin main
```

#### Scenario B: "Updates were rejected because the remote contains work that you do not have locally"
If you get `failed to push some refs`:
```bash
# Fetch and rebase remote commits
git pull --rebase origin main

# Then push
git push origin main

# OR if you want your local files to override the remote:
git push -u origin main --force
```

#### Scenario C: GitHub Authentication Failed
GitHub requires a Personal Access Token (PAT), not your GitHub password:
1. Go to **GitHub Settings** > **Developer Settings** > **Personal Access Tokens** > **Tokens (classic)**.
2. Generate a token with `repo` permissions.
3. Use that token as your password when git prompts you.

---

### 2. Ensuring Images Load on Vercel

If images are not showing after deploying on Vercel, check the following:

1. **Verify `public/` directory was committed**:
   Make sure `public/assets/images/` and `public/images/` are committed to your GitHub repo. Run:
   ```bash
   git status
   git add public/
   git commit -m "fix: ensure public images are tracked"
   git push origin main
   ```

2. **Vercel Root Directory Setting**:
   - If your GitHub repository contains both the root files and `cloned-project/`:
     - In **Vercel Dashboard** > your project > **Settings** > **General** > **Root Directory**:
     - If you pushed the entire folder, set Root Directory to `cloned-project` (or leave as `./` if you pushed the root).
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **All images are mirrored**:
   Images are served from `/assets/images/<filename>` and backed by fallback handlers to ensure they render reliably across all environments.
