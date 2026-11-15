const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('PostgreSQL Connected via Prisma (Neon)');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log('Make sure DATABASE_URL is set correctly in .env file');
  }
};

module.exports = { prisma, connectDB };
