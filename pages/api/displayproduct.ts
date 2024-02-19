import { PrismaClient } from '@prisma/client';

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// API route handler
export default async function handler(req, res) {
  try {
    // Use Prisma context here
    const products = await prisma.product2.findMany();
    res.status(200).json(products);
  } finally {
    // Close the Prisma client to prevent leaks
    await prisma.$disconnect();
  }
}