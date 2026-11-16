# Quick Deploy to Vercel (5 Minutes)

## Step 1: Push to GitHub (2 minutes)

1. **Open terminal** in your project folder
2. **Run these commands**:

```bash
git add .
git commit -m "Ready for deployment"
git push
```

If you haven't set up git yet:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

---

## Step 2: Deploy Backend (1 minute)

1. Go to: **https://vercel.com/new**
2. Sign in with GitHub
3. Click **"Import Git Repository"**
4. Select your repository
5. **IMPORTANT**: Set these:
   - Root Directory: `backend`
   - Click **"Environment Variables"**
   - Add: `DATABASE_URL` = `postgresql://neondb_owner:npg_BeXQpMR0Fnj1@ep-still-lake-bdh4zlb7-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require`
6. Click **"Deploy"**
7. **COPY YOUR BACKEND URL** (e.g., `https://task-backend-abc123.vercel.app`)

---

## Step 3: Update Frontend API URL (30 seconds)

Open `frontend/src/App.js` and change line 8:

**FROM:**
```javascript
const API_URL = 'http://localhost:5000/api/tasks';
```

**TO:**
```javascript
const API_URL = 'https://YOUR-BACKEND-URL.vercel.app/api/tasks';
```

Push changes:
```bash
git add .
git commit -m "Update API URL"
git push
```

---

## Step 4: Deploy Frontend (1 minute)

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your repository AGAIN
4. **IMPORTANT**: Set these:
   - Root Directory: `frontend`
   - Framework: Create React App
5. Click **"Deploy"**
6. **DONE!**

---

## Your URLs:

- **Backend**: https://your-backend.vercel.app
- **Frontend**: https://your-frontend.vercel.app
- **API Docs**: https://your-backend.vercel.app/api-docs

---

## Test It:

1. Open your frontend URL
2. Create a task
3. It saves to Neon database!

---

## That's It! 

Your app is now live on the internet!
