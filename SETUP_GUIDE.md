# 🚀 Task Management System - Complete Setup Guide

## ✅ Project Successfully Built!

All files have been created and dependencies installed. You're ready to run the application!

---

## 📦 What's Installed:

### Root Dependencies
✅ concurrently - Run backend and frontend simultaneously

### Backend Dependencies (in /backend)
✅ express - Web server framework
✅ mongoose - MongoDB ODM
✅ cors - Enable cross-origin requests
✅ dotenv - Environment variables
✅ swagger-jsdoc - Swagger documentation generator
✅ swagger-ui-express - Swagger UI interface
✅ nodemon - Auto-restart on code changes

### Frontend Dependencies (in /frontend)
✅ react - UI library
✅ react-dom - React DOM renderer
✅ react-scripts - React build tools
✅ tailwindcss - CSS framework
✅ autoprefixer - CSS post-processor
✅ postcss - CSS transformer
✅ axios - HTTP client for API calls

---

## 🗂️ Project Structure

```
Task-Management-API-with-Dashboard/
│
├── backend/                    # Node.js Backend
│   ├── config/
│   │   ├── database.js        # MongoDB connection
│   │   └── swagger.js         # Swagger configuration
│   ├── controllers/
│   │   └── taskController.js  # Business logic
│   ├── models/
│   │   └── Task.js            # Task schema
│   ├── routes/
│   │   └── taskRoutes.js      # API endpoints
│   ├── .env                   # Environment variables
│   ├── server.js              # Express server
│   └── package.json
│
├── frontend/                   # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx     # App header
│   │   │   ├── Stats.jsx      # Statistics cards
│   │   │   ├── TaskList.jsx   # Task grid
│   │   │   ├── TaskCard.jsx   # Individual task
│   │   │   └── TaskForm.jsx   # Create/Edit form
│   │   ├── App.js             # Main app component
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Tailwind CSS
│   ├── tailwind.config.js     # Tailwind configuration
│   └── package.json
│
├── .gitignore                  # Git ignore rules
├── package.json                # Root package.json
└── README.md                   # Full documentation

```

---

## 🎯 Quick Start (3 Steps)

### Step 1: Install and Start MongoDB

**Download MongoDB:**
- Go to: https://www.mongodb.com/try/download/community
- Download and install MongoDB Community Server
- Follow the installer instructions

**Start MongoDB Service:**

```bash
# Windows
net start MongoDB

# Check if MongoDB is running
# Open MongoDB Compass or check services
```

If MongoDB service doesn't start, you may need to:
1. Run Command Prompt as Administrator
2. Run: `net start MongoDB`

---

### Step 2: Start the Backend Server

Open a terminal in the project folder:

```bash
cd backend
npm start
```

You should see:
```
Server is running on port 5000
API Documentation available at http://localhost:5000/api-docs
MongoDB Connected: localhost
```

**Backend is now running on:** http://localhost:5000

---

### Step 3: Start the Frontend

Open a **NEW** terminal (keep backend running):

```bash
cd frontend
npm start
```

The React app will automatically open in your browser at: http://localhost:3000

---

## 🌐 Access Your Application

Once both servers are running:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend Dashboard** | http://localhost:3000 | Main UI for managing tasks |
| **Backend API** | http://localhost:5000 | REST API server |
| **Swagger Docs** | http://localhost:5000/api-docs | Interactive API documentation |

---

## 🎨 Using the Application

### Creating a Task
1. Click the **"+ New Task"** button
2. Fill in:
   - **Title** (required)
   - **Description** (optional)
   - **Status**: Pending, In Progress, or Completed
   - **Priority**: Low, Medium, or High
   - **Due Date** (optional)
3. Click **"Create Task"**

### Filtering Tasks
- Click on **All Tasks**, **Pending**, **In Progress**, or **Completed** buttons
- View statistics at the top showing task counts

### Editing a Task
- Click the **"✏️ Edit"** button on any task card
- Modify the fields
- Click **"Update Task"**

### Deleting a Task
- Click the **"🗑️ Delete"** button
- Confirm the deletion

---

## 📚 API Documentation (Swagger)

Open: http://localhost:5000/api-docs

### Available Endpoints:

#### GET /api/tasks
Get all tasks
- Query params: `?status=pending`, `?priority=high`

#### GET /api/tasks/:id
Get a single task by ID

#### POST /api/tasks
Create a new task
```json
{
  "title": "Complete documentation",
  "description": "Write user guide",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

#### PUT /api/tasks/:id
Update an existing task

#### DELETE /api/tasks/:id
Delete a task

---

## 🔧 Troubleshooting

### Problem: Backend won't start

**Error: "MongoDB connection failed"**
```
Solution:
1. Make sure MongoDB is installed
2. Start MongoDB service: net start MongoDB
3. Check if MongoDB is running on port 27017
```

**Error: "Port 5000 already in use"**
```
Solution:
1. Stop any process using port 5000
2. Or change PORT in backend/.env file
```

---

### Problem: Frontend won't start

**Error: "Port 3000 already in use"**
```
Solution:
- Stop any process using port 3000
- Or press 'Y' when asked to run on different port
```

**Error: "Cannot connect to backend"**
```
Solution:
1. Make sure backend is running on http://localhost:5000
2. Check backend terminal for errors
```

---

### Problem: CORS Errors

```
Solution:
Backend is already configured with CORS.
Make sure:
1. Backend is running on port 5000
2. Frontend is running on port 3000
3. No firewall blocking the ports
```

---

## 🛑 Stopping the Application

### Stop Backend:
- In the backend terminal: Press `Ctrl + C`

### Stop Frontend:
- In the frontend terminal: Press `Ctrl + C`

### Stop MongoDB:
```bash
net stop MongoDB
```

---

## 🔄 Alternative: Run Both at Once

From the **root folder**:

```bash
npm run dev
```

This will start both backend and frontend simultaneously!

---

## 📝 Environment Variables

### Backend (.env file)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanagement
NODE_ENV=development
```

You can modify these if needed.

---

## 🎓 What You're Learning

By working with this project, you're learning:

### Backend Skills:
✅ Node.js and Express.js
✅ RESTful API design
✅ MongoDB and Mongoose
✅ API documentation with Swagger
✅ Environment configuration
✅ CRUD operations
✅ Error handling

### Frontend Skills:
✅ React (Hooks, Components, State)
✅ Tailwind CSS
✅ HTTP requests with Axios
✅ Component composition
✅ Event handling
✅ Form management

### Full-Stack Integration:
✅ Connecting frontend to backend
✅ API integration
✅ State management
✅ Async/await patterns

---

## 🚀 Next Steps - Enhance Your Project

Once comfortable with the basics, try adding:

1. **User Authentication**
   - Login/Register functionality
   - JWT tokens
   - Protected routes

2. **Advanced Features**
   - Task categories/tags
   - File attachments
   - Comments on tasks
   - Task assignments to users

3. **UI Improvements**
   - Dark mode
   - Drag and drop tasks
   - Calendar view
   - Search functionality

4. **Backend Enhancements**
   - Pagination
   - Sorting options
   - Data validation
   - Rate limiting

---

## 📞 Need Help?

### Check These First:
1. Make sure MongoDB is running
2. Both backend and frontend servers are running
3. No firewall blocking ports 3000 or 5000
4. Check terminal for error messages

### Useful Commands:
```bash
# Check if MongoDB is running (Windows)
tasklist | findstr mongo

# Kill process on port 5000 (if needed)
netstat -ano | findstr :5000

# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

---

## 📄 Project Files Summary

| File | Purpose |
|------|---------|
| backend/server.js | Express server setup |
| backend/models/Task.js | Task data schema |
| backend/controllers/taskController.js | Business logic |
| backend/routes/taskRoutes.js | API routes |
| backend/config/swagger.js | Swagger configuration |
| frontend/src/App.js | Main React component |
| frontend/src/components/*.jsx | UI components |
| frontend/tailwind.config.js | Tailwind CSS setup |

---

## ✨ You're Ready for Monday!

Your complete Task Management System is built and ready to demonstrate:

✅ Full-stack application
✅ React + Tailwind frontend
✅ Node.js + Express backend
✅ MongoDB database
✅ Swagger API documentation
✅ CRUD operations working
✅ Professional UI design

**Start the application and start learning! Good luck! 🎉**
