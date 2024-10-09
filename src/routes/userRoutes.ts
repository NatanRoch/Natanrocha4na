// src/routes/userRoutes.ts
import express, { Request, Response } from 'express';
import dbPromise from '..//config/database';

const router = express.Router();

// Get all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const db = await dbPromise;
    const users = await db.all('SELECT * FROM users'); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
});

// Create a new user
router.post('/users', async (req: Request, res: Response) => {
  const { name, email } = req.body; // Assuming you have name and email in the request body

  try {
    const db = await dbPromise;
    await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]); // Insert new user
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

// Export the router
export default router;