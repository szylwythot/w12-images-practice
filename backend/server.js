const express = require('express');
// const fileUpload = require('express-fileupload');

const path = require('path');

const fs = require('fs');
const { request } = require('http');
const app = express();

const port = 9000;
const ipAddress = `http://127.0.0.2:${port}`

const frontendPath = path.join(`${__dirname}/../frontend`);

app.use(express.json()); // opcionális
app.use(`/pub`, express.static(`${frontendPath}/public`));

app.get('/', (request, response, next) => { // ez a sima 
    console.log();
    response.sendFile(`${frontendPath}/index.html`);
});

app.get(`/image-list`, (request, response, next) => { 
    response.sendFile(`${frontendPath}/data.json`);
});

app.listen(port, () => { // ez mindig a levégére menjen
    console.log(ipAddress);
});
