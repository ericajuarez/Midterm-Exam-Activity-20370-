const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) =>{
    res.json({message: 'Express is working! Erica B. Juarez'});
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});