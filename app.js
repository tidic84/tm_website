const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
app.use(express.static("public"));
app.get('*', function(req, res){
    res.status(404).send('Not Found !!!!!!!!  err 404');
  });
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});