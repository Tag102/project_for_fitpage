// routes/events.js
import express from 'express';
import * as eventsController from '../controllers/eventsController';
import {checkEventorganizer} from '../middlewares/eventMiddleware';

const router = express.Router();

// Routes for events
router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);
router.post('/', checkEventorganizer, eventsController.createEvent);
router.put('/:id', checkEventorganizer, eventsController.updateEvent);
router.delete('/:id', checkEventorganizer, eventsController.deleteEvent);

export default router;
