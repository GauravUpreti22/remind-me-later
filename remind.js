
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let reminders = [];

app.use(bodyParser.json());

app.post('/api/create-reminder', (req, res) => {
    const reminder = req.body;
    if (isValidReminder(reminder)) {
        reminders.push(reminder);
        res.status(201).json({ message: 'Reminder created successfully' });
    } else {
        res.status(400).json({ error: 'Invalid reminder data' });
    }
});

function isValidReminder(reminder) {
   
    if (!reminder || 
        typeof reminder.date !== 'string' || reminder.date.trim() === '' ||
        typeof reminder.time !== 'string' || reminder.time.trim() === '' ||
        typeof reminder.message !== 'string' || reminder.message.trim() === '' ||
        typeof reminder.reminder_type !== 'string' || reminder.reminder_type.trim() === '') {
        return false;
    }
    return true;
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
