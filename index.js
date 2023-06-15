const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const environment = process.env.NODE_ENV;
    console.log(`This request is running on the ${environment} environment`);
    res.status(200).json({ hello: 'world' });
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});