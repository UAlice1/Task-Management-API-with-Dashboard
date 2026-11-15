import React from 'react';

function Stats({ tasks }) {
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-gray-600 text-sm font-medium">Total Tasks</div>
        <div className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</div>
      </div>
      
      <div className="bg-warning bg-opacity-10 rounded-lg shadow p-6 border-l-4 border-warning">
        <div className="text-gray-600 text-sm font-medium">Pending</div>
        <div className="text-3xl font-bold text-warning mt-2">{stats.pending}</div>
      </div>
      
      <div className="bg-primary bg-opacity-10 rounded-lg shadow p-6 border-l-4 border-primary">
        <div className="text-gray-600 text-sm font-medium">In Progress</div>
        <div className="text-3xl font-bold text-primary mt-2">{stats.inProgress}</div>
      </div>
      
      <div className="bg-success bg-opacity-10 rounded-lg shadow p-6 border-l-4 border-success">
        <div className="text-gray-600 text-sm font-medium">Completed</div>
        <div className="text-3xl font-bold text-success mt-2">{stats.completed}</div>
      </div>
    </div>
  );
}

export default Stats;
