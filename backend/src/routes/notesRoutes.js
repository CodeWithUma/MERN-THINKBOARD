// This file is created to separate the routes for notes from the main server file
// and set up the basic structure for handling notes-related requests.
import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method (GET, POST, etc.) 
// that lets the client/user interact with the specific resource.

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;