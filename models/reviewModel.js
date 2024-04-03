import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    registrationExperience: {
        type: Number,
        required: true
    },
    eventExperience: {
        type: Number,
        required: true
    },
    breakfastExperience: {
        type: Number,
        required: true
    },
    overallRating: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    reports: {
        type: Number,
        default: 0
    },
    flagged: {
        type: Boolean,
        default: false
    },
    organizerResponse: { type: String }
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
