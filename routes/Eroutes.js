// routes/events.js
import express from 'express';
import * as eventsController from '../controllers/eventsController.js';
import { checkEventorganizer } from '../middlewares/eventMiddleware.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Routes for events
router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);
router.post('/', requireSignIn, eventsController.createEvent);
router.put('/:id', requireSignIn, eventsController.updateEvent);
router.delete('/:id', requireSignIn, eventsController.deleteEvent);

export default router;
