const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'A comprehensive Task Management API with CRUD operations',
      contact: {
        name: 'API Support',
        email: 'support@taskmanagement.com'
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          required: ['title'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated task ID',
            },
            title: {
              type: 'string',
              description: 'Task title',
              example: 'Complete project documentation'
            },
            description: {
              type: 'string',
              description: 'Task description',
              example: 'Write comprehensive documentation for the API'
            },
            status: {
              type: 'string',
              enum: ['pending', 'in-progress', 'completed'],
              description: 'Task status',
              example: 'pending'
            },
            priority: {
              type: 'string',
              enum: ['low', 'medium', 'high'],
              description: 'Task priority',
              example: 'high'
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
              description: 'Task due date',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Task creation date',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Task last update date',
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Error message'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
