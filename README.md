# Task Management System

A full-stack Task Management application with React frontend, Node.js backend, MongoDB database, and Swagger API documentation.

## 🚀 Features

### Backend (Node.js + Express)
- ✅ RESTful API for task management (CRUD operations)
- ✅ MongoDB database integration
- ✅ Swagger API documentation
- ✅ Filter tasks by status and priority
- ✅ Error handling and validation
- ✅ CORS enabled for frontend communication

### Frontend (React + Tailwind CSS)
- ✅ Modern, responsive dashboard UI
- ✅ Create, read, update, and delete tasks
- ✅ Filter tasks by status (All, Pending, In Progress, Completed)
- ✅ Task statistics dashboard
- ✅ Beautiful Tailwind CSS styling
- ✅ Real-time API integration

## 📋 Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)

## 🛠️ Installation

### 1. Install all dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Set up MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**Mac/Linux:**
```bash
# Start MongoDB
brew services start mongodb-community
# OR
sudo systemctl start mongod
```

### 3. Configure Environment Variables

The backend is already configured with default settings in `backend/.env`:
- Port: 5000
- MongoDB URI: mongodb://localhost:27017/taskmanagement

You can modify these if needed.

## 🎯 Running the Application

### Option 1: Run Everything Together (Recommended)

From the root directory:
```bash
npm run dev
```

This will start both the backend (port 5000) and frontend (port 3000) simultaneously.

### Option 2: Run Separately

**Backend (Terminal 1):**
```bash
cd backend
npm start
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

## 🌐 Access Points

Once running, you can access:

- **Frontend Dashboard**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Swagger API Documentation**: http://localhost:5000/api-docs

## 📚 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Query Parameters

- `?status=pending` - Filter by status (pending, in-progress, completed)
- `?priority=high` - Filter by priority (low, medium, high)

## 🧪 Testing the API

### Using Swagger (Recommended)

1. Go to http://localhost:5000/api-docs
2. You'll see all API endpoints with interactive documentation
3. Click "Try it out" on any endpoint to test it directly

### Using the Frontend

1. Go to http://localhost:3000
2. Click "+ New Task" to create tasks
3. Use filters to view tasks by status
4. Edit or delete tasks using the buttons on each card

### Example Task Object

```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the API",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

## 📁 Project Structure

```
Task-Management-API-with-Dashboard/
├── backend/
│   ├── config/
│   │   ├── database.js      # MongoDB connection
│   │   └── swagger.js       # Swagger configuration
│   ├── controllers/
│   │   └── taskController.js # Task CRUD logic
│   ├── models/
│   │   └── Task.js          # Task schema
│   ├── routes/
│   │   └── taskRoutes.js    # API routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
├── package.json
└── README.md
```

## 🎨 Tech Stack

**Frontend:**
- React 18
- Tailwind CSS
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Swagger UI Express
- CORS

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running. Start it with:
- Windows: `net start MongoDB`
- Mac/Linux: `brew services start mongodb-community`

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change the PORT in `backend/.env` or stop the process using port 5000.

### CORS Errors
**Solution:** Make sure the backend is running on port 5000 and CORS is enabled (already configured).

## 🚀 What You've Learned

By working with this project, you've learned:

1. **Backend Development:**
   - Building RESTful APIs with Express.js
   - MongoDB database integration with Mongoose
   - API documentation with Swagger
   - Environment configuration
   - Error handling and validation

2. **Frontend Development:**
   - React hooks (useState, useEffect)
   - Component composition
   - Tailwind CSS styling
   - API integration with Axios
   - State management

3. **Full-Stack Integration:**
   - Connecting frontend to backend
   - CORS configuration
   - HTTP methods (GET, POST, PUT, DELETE)
   - Async/await patterns

## 📝 Next Steps

To enhance this project, you can add:

- User authentication (JWT)
- User registration and login
- Task categories/tags
- File attachments
- Task comments
- Email notifications
- Pagination
- Search functionality
- Dark mode
- Export tasks to PDF/Excel

## 📄 License

This project is free to use for learning purposes.

---

**Happy Coding! 🎉**

If you have any questions, check the Swagger documentation at http://localhost:5000/api-docs
