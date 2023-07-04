'use strict';

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 4444;

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.use(express.static('public'));

app.listen(port, 'localhost',() => {
    console.log('Listening on port ' + port);
});
