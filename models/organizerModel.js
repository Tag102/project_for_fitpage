const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // other organizer information fields
});

export default mongoose.model('Organizer', organizerSchema);
