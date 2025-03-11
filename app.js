const express = require('express');
const pug = require('pug');

const app = express();

app.get('/ssti', (req, res) => {
    const template = `p= ${req.query.name}`;
    const compiledTemplate = pug.compile(template);
    res.send(compiledTemplate());
});

app.listen(3000, () => console.log('Server running on port 3000'));
