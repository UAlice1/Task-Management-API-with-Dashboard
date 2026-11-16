# Deploy to Vercel - Step by Step Guide

## Option 1: Deploy Backend and Frontend Separately (RECOMMENDED)

### Step 1: Deploy Backend First

1. **Go to**: https://vercel.com
2. **Sign in** with GitHub
3. **Click** "Add New" → "Project"
4. **Import** your repository
5. **Configure Project**:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
6. **Environment Variables** (Click "Add"):
   ```
   DATABASE_URL = postgresql://neondb_owner:npg_BeXQpMR0Fnj1@ep-still-lake-bdh4zlb7-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
   NODE_ENV = production
   ```
7. **Click** "Deploy"
8. **Copy** your backend URL (e.g., `https://your-backend.vercel.app`)

### Step 2: Update Frontend to Use Backend URL

Update `frontend/src/App.js`:

Change this line:
```javascript
const API_URL = 'http://localhost:5000/api/tasks';
```

To:
```javascript
const API_URL = 'https://your-backend.vercel.app/api/tasks';
```

### Step 3: Deploy Frontend

1. **Go back to Vercel**
2. **Click** "Add New" → "Project"
3. **Import** the same repository again
4. **Configure Project**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. **Click** "Deploy"
6. **Done!** Your frontend URL: `https://your-app.vercel.app`

---

## Option 2: Deploy Everything Together (Simpler but Limited)

### Step 1: Prepare for Deployment

1. **Update** `frontend/package.json` - Add build script:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "postbuild": "cd .. && echo Build complete"
}
```

### Step 2: Deploy to Vercel

1. **Go to**: https://vercel.com
2. **Sign in** with GitHub
3. **Click** "Add New" → "Project"
4. **Import** your repository
5. **Configure**:
   - **Framework**: Other
   - **Root Directory**: `./`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Output Directory**: `frontend/build`
6. **Environment Variables**:
   ```
   DATABASE_URL = postgresql://neondb_owner:npg_BeXQpMR0Fnj1@ep-still-lake-bdh4zlb7-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
   NODE_ENV = production
   ```
7. **Click** "Deploy"

---

## Quick Deploy Commands

### If you prefer CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy backend
cd backend
vercel

# Deploy frontend
cd ../frontend
vercel
```

---

## After Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Frontend API_URL updated to backend URL
- [ ] Database connection working
- [ ] CORS configured for production domain
- [ ] Environment variables set in Vercel
- [ ] Test creating a task
- [ ] Test editing a task
- [ ] Test deleting a task
- [ ] Test filtering

---

## Troubleshooting

### Backend Error: "Cannot connect to database"
- Check DATABASE_URL environment variable in Vercel
- Make sure it includes `?sslmode=require`

### Frontend Error: "Network Error"
- Update API_URL in `frontend/src/App.js` to your backend URL
- Check CORS settings in backend

### Build Failed
- Check build logs in Vercel dashboard
- Make sure all dependencies are in package.json
- Run `npm install` locally to verify

---

## Environment Variables Needed

### Backend (.env on Vercel):
```
DATABASE_URL=postgresql://neondb_owner:npg_BeXQpMR0Fnj1@ep-still-lake-bdh4zlb7-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
NODE_ENV=production
```

### Frontend (No env needed, just update API_URL in code)

---

## Custom Domain (Optional)

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

## Your URLs After Deployment

- **Backend API**: https://your-backend-name.vercel.app
- **Frontend**: https://your-app-name.vercel.app
- **API Docs**: https://your-backend-name.vercel.app/api-docs

---

## Ready to Deploy!

Choose Option 1 (Separate deployments) for best results.

Your Neon database is already configured and ready!
