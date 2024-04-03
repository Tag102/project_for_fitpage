// routes/reviewRoutes.js
import express from 'express';
const router = express.Router();
import * as reviewController from '../controllers/reviewController.js';
// import { authMiddleware } from '../middlewares/authMiddleware.js';

// Routes
router.post('/', reviewController.submitReview);
router.post('/:reviewId/like', reviewController.likeReview);
router.post('/:reviewId/report', reviewController.reportReview);
router.post('/:reviewId/respond', reviewController.respondToReview);
router.get('/summary/:eventId', reviewController.getEventSummary);
router.get('/ratings/:eventId', reviewController.getEventRatings);
router.get('/:eventId', reviewController.getEventReviews);

export default router;
