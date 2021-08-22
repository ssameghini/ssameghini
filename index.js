const express = require('express');
const app = express();

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
});

app.listen(8000, () => console.log('App is served in port 8000'));