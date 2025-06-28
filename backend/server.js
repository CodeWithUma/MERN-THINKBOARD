import express from 'express';

const app = express();
app.use(express.json());

// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method (GET, POST, etc.) 
// that lets the client/user interact with the specific resource.
app.get('/api/notes', (req, res) => {
    res.status(200).send("Hello from the backend!");
});

app.post('/api/notes', (req, res) => {
    res.status(201).json({
        message: "Note created successfully!",
    });
});

app.put('/api/notes/:id', (req, res) => {
    res.status(200).json({
        message: "Note updated successfully!",
    });
});

app.delete('/api/notes/:id', (req, res) => {
    res.status(200).json({
        message: "Note deleted successfully!",
    });
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});