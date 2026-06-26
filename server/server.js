import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

// Health check route
app.get('/', (req, res) => {
  res.send('🟢 Platformsify backend is up and running!');
});

// Create a new user
app.post('/api/users', async (req, res) => {
  const { email, name } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ email, name }])
    .select();

  if (error) {
    console.error('❌ Error inserting user:', error.message);
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ user: data[0] });
});

// Get all users
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error('❌ Error fetching users:', error.message);
    return res.status(500).json({ error: error.message });
  }

  res.json({ users: data });
});

// Start server
const PORT = 5000;
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Platformsify backend running on http://localhost:${PORT}`);

  // Connection test
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    console.error('❌ Supabase connection error:', error.message);
  } else {
    console.log('✅ Connected to Supabase. Users:', data?.length || 0);
  }
});
