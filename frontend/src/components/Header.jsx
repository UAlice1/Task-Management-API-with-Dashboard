import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Task Management Dashboard</h1>
            <p className="text-gray-600 mt-1">Organize and track your tasks efficiently</p>
          </div>
          <a
            href="https://task-management-api-with-dashboard.vercel.app/api-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            API Docs
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
