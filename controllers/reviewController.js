// controllers/reviewController.js
import Review from '../models/reviewModel.js';

// Submit Review
export const submitReview = async (req, res) => {
    try {
        const { eventId, registrationExp, eventExp, breakfastExp, overallExp } = req.body;
        const userId = req.user.id; // Assuming authenticated user data is attached to the request

        const review = await Review.create({
            eventId,
            userId,
            registrationExp,
            eventExp,
            breakfastExp,
            overallExp
        });

        res.status(201).json({ message: 'Review submitted successfully', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Like Review
export const likeReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const review = await Review.findByIdAndUpdate(reviewId, { $inc: { likes: 1 } }, { new: true });

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ message: 'Review liked successfully', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Report Review
export const reportReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const review = await Review.findByIdAndUpdate(reviewId, { $inc: { reports: 1 }, $set: { flagged: true } }, { new: true });

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ message: 'Review reported successfully', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Respond to Review
export const respondToReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const { message } = req.body;

        const review = await Review.findByIdAndUpdate(
            reviewId,
            { $push: { responses: { message, organizerId: req.user.id } } },
            { new: true }
        );

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ message: 'Response added successfully', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Event Summary
export const getEventSummary = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        // Calculate summary based on reviews for the event
        // Implement logic to calculate summary based on reviews
        res.status(200).json({ message: 'Event summary retrieved successfully', summary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Event Ratings
export const getEventRatings = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        // Calculate ratings based on reviews for the event
        // Implement logic to calculate ratings based on reviews
        res.status(200).json({ message: 'Event ratings retrieved successfully', ratings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Event Reviews
export const getEventReviews = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const page = req.query.page || 1;
        const pageSize = 10; // Number of reviews per page

        const reviews = await Review.find({ eventId })
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({ message: 'Event reviews retrieved successfully', reviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
