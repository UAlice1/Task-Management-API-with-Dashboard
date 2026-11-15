import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import Stats from './components/Stats';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data.data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Failed to fetch tasks. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data.data, ...tasks]);
      setShowForm(false);
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task');
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, taskData);
      setTasks(tasks.map(task => task._id === id ? response.data.data : task));
      setEditingTask(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats tasks={tasks} />
        
        <div className="mb-6 flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Tasks
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'pending'
                  ? 'bg-warning text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'in-progress'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'completed'
                  ? 'bg-success text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Completed
            </button>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {showForm ? 'Cancel' : '+ New Task'}
          </button>
        </div>

        {showForm && (
          <div className="mb-6">
            <TaskForm
              task={editingTask}
              onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
              onCancel={handleCancelForm}
            />
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onEdit={handleEdit}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
