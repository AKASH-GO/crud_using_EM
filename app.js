const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bcrypt = require('bcrypt');

app.get('/signup', (req, res) => {
    // Your route handling code for the signup page
    res.sendFile(__dirname + '/public/signup.html');
});

app.use(express.json());
app.use(express.static('public'));

const users = [];

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists
    if (users.find((user) => user.username === username)) {
        return res.json({ success: false, message: 'Username already exists. Choose another.' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.json({ success: true, message: 'Signup successful.' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
