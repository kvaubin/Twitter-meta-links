// index.js (Node.js with Express)
const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Bearer token for Twitter API
const BEARER_TOKEN =AAAAAAAAAAAAAAAAAAAAAM4xxwEAAAAADmkdzdOHb0rQ8R7WaCDdr7qoxAw%3DCYzSoSuxDnfpsdmEl4uJCkn09CQJsQBCs3gJXqTuKi0jYM56Zp;

app.get('/tweet', async (req, res) => {
    const tweetUrl = req.query.url;
    const tweetId = tweetUrl.split('/').pop(); // Extract tweet ID from URL

    const tweetApiUrl = `https://api.twitter.com/2/tweets/${tweetId}`;
    
    try {
        const response = await fetch(tweetApiUrl, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
            }
        });

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error('Error fetching tweet:', error);
        res.status(500).send('Error fetching tweet');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
