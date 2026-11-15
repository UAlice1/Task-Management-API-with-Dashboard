import React from 'react';

function TaskCard({ task, onEdit, onDelete }) {
  const statusColors = {
    pending: 'bg-warning text-white',
    'in-progress': 'bg-primary text-white',
    completed: 'bg-success text-white',
  };

  const priorityColors = {
    low: 'text-gray-600',
    medium: 'text-orange-600',
    high: 'text-red-600',
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[task.status]}`}>
          {task.status.replace('-', ' ').toUpperCase()}
        </span>
        <span className={`text-xs font-bold ${priorityColors[task.priority]}`}>
          {task.priority.toUpperCase()} PRIORITY
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{task.title}</h3>
      
      {task.description && (
        <p className="text-gray-600 mb-4 line-clamp-2">{task.description}</p>
      )}

      {task.dueDate && (
        <div className="text-sm text-gray-500 mb-4">
          📅 Due: {formatDate(task.dueDate)}
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t">
        <button
          onClick={() => onEdit(task)}
          className="text-primary hover:text-blue-600 font-semibold"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-danger hover:text-red-600 font-semibold"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
