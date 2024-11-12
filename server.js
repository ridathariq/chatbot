const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const excuses = JSON.parse(fs.readFileSync('./data/excuses.json'));

app.get('/api/excuse/:category', (req, res) => {
    const category = req.params.category;
    const categoryExcuses = excuses[category];

    if (!categoryExcuses) {
        return res.status(404).json({ message: 'Category not found' });
    }

    const randomIndex = Math.floor(Math.random() * categoryExcuses.length);
    const randomExcuse = categoryExcuses[randomIndex];

    res.json({ excuse: randomExcuse });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
