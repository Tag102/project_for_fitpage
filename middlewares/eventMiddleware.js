export const checkEventorganizer = (req, res, next) => {
    const isEventorganizer = req.user && req.user.role == 1;

    if (isEventorganizer) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized: Not an event organizer' });
    }
};
