const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
        const app = express();

        app.get('*', (req, res) => {
            return handle(req, res);
        });

        app.listen(9090, err => {
            console.log('>>> server is ready on port 9090');
        });
    })
    .catch(err => {
        console.log(err);
        process.exit();
    });
