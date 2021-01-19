const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/public');
app.listen(3030, () => console.log(`Listening on port ${3030}!`));

