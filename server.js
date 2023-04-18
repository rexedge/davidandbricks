const express = require('express');
const fetch = require('node-fetch');
const app = express();

// enable CORS for all requests
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'https://dandb-omega.vercel.app');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
});

// handle POST requests to /send-email
app.post('/send-email', async (req, res) => {
     try {
          const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`
               },
               body: JSON.stringify(req.body)
          });
          const data = await response.json();
          res.json(data);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while sending the email.' });
     }
});

app.listen(3000, () => {
     console.log('Server listening on port 3000');
});
