# 🏗️ Task Management System - Architecture

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│                     http://localhost:3000                        │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ HTTP Requests
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      REACT FRONTEND                              │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Header     │  │    Stats     │  │  TaskForm    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  TaskList    │  │  TaskCard    │  │  TaskCard    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  Technologies: React, Tailwind CSS, Axios                       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ API Calls (Axios)
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                     EXPRESS BACKEND                              │
│                  http://localhost:5000                           │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    API ROUTES                             │  │
│  │  GET    /api/tasks         → Get all tasks               │  │
│  │  GET    /api/tasks/:id     → Get single task             │  │
│  │  POST   /api/tasks         → Create task                 │  │
│  │  PUT    /api/tasks/:id     → Update task                 │  │
│  │  DELETE /api/tasks/:id     → Delete task                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            │                                     │
│                            ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  CONTROLLERS                              │  │
│  │  - getTasks()                                             │  │
│  │  - getTask()                                              │  │
│  │  - createTask()                                           │  │
│  │  - updateTask()                                           │  │
│  │  - deleteTask()                                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            │                                     │
│                            ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    MODELS                                 │  │
│  │  Task Schema:                                             │  │
│  │  - title (String, required)                               │  │
│  │  - description (String)                                   │  │
│  │  - status (enum: pending, in-progress, completed)         │  │
│  │  - priority (enum: low, medium, high)                     │  │
│  │  - dueDate (Date)                                         │  │
│  │  - timestamps (createdAt, updatedAt)                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  Technologies: Node.js, Express, Mongoose, Swagger              │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Mongoose ODM
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      MONGODB DATABASE                            │
│                  mongodb://localhost:27017                       │
│                                                                  │
│  Database: taskmanagement                                       │
│  Collection: tasks                                              │
│                                                                  │
│  Document Example:                                              │
│  {                                                              │
│    "_id": "507f1f77bcf86cd799439011",                          │
│    "title": "Complete documentation",                           │
│    "description": "Write user guide",                           │
│    "status": "in-progress",                                     │
│    "priority": "high",                                          │
│    "dueDate": "2024-12-31T00:00:00.000Z",                      │
│    "createdAt": "2024-11-15T10:00:00.000Z",                    │
│    "updatedAt": "2024-11-15T11:30:00.000Z"                     │
│  }                                                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### Creating a Task (POST Request)

```
User fills form
     ↓
React Component (TaskForm)
     ↓
axios.post('/api/tasks', taskData)
     ↓
Express Route (/api/tasks)
     ↓
Task Controller (createTask)
     ↓
Mongoose Model (Task.create)
     ↓
MongoDB (saves document)
     ↓
Response back to frontend
     ↓
UI updates with new task
```

### Fetching Tasks (GET Request)

```
Component mounts (useEffect)
     ↓
axios.get('/api/tasks')
     ↓
Express Route (/api/tasks)
     ↓
Task Controller (getTasks)
     ↓
Mongoose Model (Task.find)
     ↓
MongoDB (query documents)
     ↓
Response with tasks array
     ↓
setState(tasks)
     ↓
UI renders task cards
```

---

## Component Hierarchy

```
App.js (Main Component)
├── Header
│   └── Navigation & Title
│
├── Stats
│   ├── Total Tasks
│   ├── Pending Count
│   ├── In Progress Count
│   └── Completed Count
│
├── Filter Buttons
│   ├── All Tasks
│   ├── Pending
│   ├── In Progress
│   └── Completed
│
├── TaskForm (conditional render)
│   ├── Title Input
│   ├── Description Textarea
│   ├── Status Select
│   ├── Priority Select
│   ├── Due Date Input
│   └── Submit/Cancel Buttons
│
└── TaskList
    └── TaskCard (repeated)
        ├── Status Badge
        ├── Priority Badge
        ├── Title
        ├── Description
        ├── Due Date
        ├── Edit Button
        └── Delete Button
```

---

## State Management

### App Component State

```javascript
const [tasks, setTasks] = useState([]);
// Stores all tasks from database

const [loading, setLoading] = useState(true);
// Loading state for API calls

const [showForm, setShowForm] = useState(false);
// Toggle form visibility

const [editingTask, setEditingTask] = useState(null);
// Task being edited (null for create)

const [filter, setFilter] = useState('all');
// Current filter: 'all', 'pending', 'in-progress', 'completed'
```

---

## API Request Flow

### 1. Get All Tasks
```
Frontend: GET http://localhost:5000/api/tasks
Backend: Task.find().sort({ createdAt: -1 })
Response: { success: true, count: 10, data: [...tasks] }
```

### 2. Create Task
```
Frontend: POST http://localhost:5000/api/tasks
Body: { title, description, status, priority, dueDate }
Backend: Task.create(req.body)
Response: { success: true, data: newTask }
```

### 3. Update Task
```
Frontend: PUT http://localhost:5000/api/tasks/:id
Body: { title, description, status, priority, dueDate }
Backend: Task.findByIdAndUpdate(id, req.body)
Response: { success: true, data: updatedTask }
```

### 4. Delete Task
```
Frontend: DELETE http://localhost:5000/api/tasks/:id
Backend: Task.findByIdAndDelete(id)
Response: { success: true, message: "Task deleted" }
```

---

## Technology Stack Details

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI library |
| React DOM | 18.2.0 | React rendering |
| Tailwind CSS | 3.3.5 | Utility-first CSS |
| Axios | 1.6.0 | HTTP client |
| PostCSS | 8.4.31 | CSS processing |
| Autoprefixer | 10.4.16 | CSS vendor prefixes |

### Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Express | 4.18.2 | Web framework |
| Mongoose | 8.0.0 | MongoDB ODM |
| CORS | 2.8.5 | Cross-origin requests |
| Dotenv | 16.3.1 | Environment variables |
| Swagger JSDoc | 6.2.8 | API documentation |
| Swagger UI Express | 5.0.0 | Swagger interface |
| Nodemon | 3.0.1 | Dev auto-restart |

---

## Environment Configuration

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanagement
NODE_ENV=development
```

### Frontend (proxy in package.json)
```json
"proxy": "http://localhost:5000"
```

This allows frontend to make requests to `/api/tasks` instead of `http://localhost:5000/api/tasks`

---

## Security Features

### Current Implementation:
- ✅ Input validation (Mongoose schema)
- ✅ CORS enabled for localhost
- ✅ Environment variables for config
- ✅ Error handling middleware

### Future Enhancements:
- 🔒 JWT authentication
- 🔒 Rate limiting
- 🔒 Input sanitization
- 🔒 HTTPS in production
- 🔒 Password hashing

---

## Performance Considerations

### Current Optimizations:
- MongoDB indexing on _id
- Timestamps for sorting
- React component memoization potential
- Async/await for non-blocking operations

### Future Improvements:
- Pagination for large datasets
- Caching with Redis
- Database connection pooling
- Image/file optimization
- Code splitting in React

---

## Deployment Architecture (Future)

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION SETUP                          │
└─────────────────────────────────────────────────────────────┘

Frontend (Vercel/Netlify)
    ↓
Backend (Heroku/AWS/DigitalOcean)
    ↓
MongoDB Atlas (Cloud Database)
```

### Deployment Steps:
1. Build frontend: `npm run build`
2. Deploy static files to hosting
3. Deploy backend to server
4. Set up MongoDB Atlas
5. Configure environment variables
6. Set up domain and SSL

---

## Error Handling Flow

```
Error Occurs
     ↓
Try-Catch Block
     ↓
Log Error (console.error)
     ↓
Send Error Response
     {
       success: false,
       message: "Error description",
       error: errorDetails (in development)
     }
     ↓
Frontend catches error
     ↓
Display user-friendly message
     (alert or toast notification)
```

---

## Testing Strategy (Future Implementation)

### Backend Testing:
- Unit tests for controllers
- Integration tests for API routes
- Database mocking with Jest

### Frontend Testing:
- Component tests with React Testing Library
- Integration tests for API calls
- E2E tests with Cypress

---

## Monitoring & Logging (Production)

### Backend Logging:
```javascript
// Request logging
app.use(morgan('combined'));

// Error logging
winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});
```

### Frontend Monitoring:
- Google Analytics
- Sentry for error tracking
- Performance monitoring

---

This architecture provides a solid foundation for a scalable task management system with clear separation of concerns and room for future enhancements!
