import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

// Whenever we want to use a specific route, we can use the app.use method
// and specify the base path for that route.
app.use('/api/notes', notesRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});